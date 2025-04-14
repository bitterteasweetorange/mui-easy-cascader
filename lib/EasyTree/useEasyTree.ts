import type { Draft } from 'immer'
import { isNil } from 'lodash-es'
import { useCallback, useMemo, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { type Updater, useImmer } from 'use-immer'
import type { EasyId, EasyNode } from '../utils'

export type UseEasyTreeProps<T extends EasyNode> = {
  // for render, filter and highlight the keyword
  getNodeLabel: (node: T) => string
  defaultExpandedIds?: EasyId[]
  defaultSelectedId?: EasyId
}
export type UseEasyTreeReturn<T extends EasyNode> = {
  data: T[]
  // for render, as same as props
  getNodeLabel: (node: T) => string
  selectedId: EasyId | null
  setSelectedId: (id: EasyId | null) => void
  fullData: T[]
  setFullData: Updater<T[]>
  createNode: (
    parentId: EasyId | null,
    newNode: Draft<Omit<T, 'childrenId' | 'pathId'>>,
  ) => void
  updateNode: (id: EasyId, node: Draft<T>) => void
  deleteNode: (id: EasyId) => void
  expandedId: EasyId[]
  setExpandedId: (id: EasyId[]) => void
  search: string
  setSearch: (val: string) => void
}

export function useEasyTree<T extends EasyNode>(
  props: UseEasyTreeProps<T>,
): UseEasyTreeReturn<T> {
  const { defaultExpandedIds = [], defaultSelectedId } = props
  const [search, setSearch] = useState('')
  const [selectedId, setSelectedId] = useState<EasyId | null>(
    defaultSelectedId ?? null,
  )

  const [expandedId, setExpandedId] = useState<EasyId[]>(defaultExpandedIds)

  const emptyData: T[] = []
  const [fullData, setFullData] = useImmer<T[]>(emptyData)

  const createNode: UseEasyTreeReturn<T>['createNode'] = (
    parentId,
    newNode,
  ) => {
    // root

    if (isNil(parentId)) {
      setFullData((draft) => {
        draft.push(newNode as Draft<T>)
      })
      // auto select
      setSelectedId((newNode as Draft<T>).id)
      return
    }

    // not root
    const parentIndex = fullData.findIndex((x) => x.id === parentId)
    if (parentIndex === -1) throw new Error('no node')

    setFullData((draft) => {
      const parent = draft[parentIndex]
      if (parent) {
        // update parent's childrenId
        parent.childrenId = [
          ...(parent.childrenId || []),
          (newNode as Draft<T>).id,
        ]
      }
      // update new node's pathId
      draft.push({
        ...(newNode as Draft<T>),
        pathId: [...(parent?.pathId || []), parentId],
      })
    })
    // auto select
    setSelectedId((newNode as Draft<T>).id)
    // auto expand
    if (!expandedId.includes(parentId)) {
      setExpandedId((pre) => [...pre, parentId])
    }
  }

  const updateNode: UseEasyTreeReturn<T>['updateNode'] = (id, node) => {
    setFullData((draft) => {
      const index = fullData.findIndex((x) => x.id === id)
      if (index === -1) throw new Error('no node')

      draft[index] = node
    })
    setSelectedId(node.id)
  }

  const deleteNode: UseEasyTreeReturn<T>['deleteNode'] = (id: EasyId) => {
    setFullData((draft) => {
      const index = fullData.findIndex((x) => x.id === id)
      if (index === -1) throw new Error('no node')

      const node = draft[index]
      if (!node) throw new Error('no node')
      const parentIndex = fullData.findIndex((item) =>
        item.childrenId?.includes(node?.id),
      )
      const parent = draft[parentIndex]
      if (parent) {
        parent.childrenId = parent.childrenId?.filter((p) => p !== id)
      }

      draft.splice(index, 1)
    })
  }

  const [debouncedSearch] = useDebounce(search, 500)

  // immutable
  const getNodeLabel = useCallback((node: T) => {
    return props.getNodeLabel(node)
  }, [])

  const data: T[] = useMemo(() => {
    if (!debouncedSearch) return fullData

    const res = filterKeywordNodes(fullData, getNodeLabel, debouncedSearch)
    setExpandedId(res.map((node) => node.id))
    return res
  }, [fullData, debouncedSearch, getNodeLabel])

  return {
    getNodeLabel,
    selectedId,
    setSelectedId,
    data,
    fullData,
    setFullData,
    deleteNode,
    updateNode,
    createNode,
    expandedId,
    setExpandedId,
    search: debouncedSearch,
    setSearch,
  }
}

function filterKeywordNodes<T extends EasyNode>(
  fullData: T[],
  getNodeLabel: (node: T) => string,
  debouncedSearch: string,
): T[] {
  const includeKeywordNodes = fullData.filter((node) => {
    const label = getNodeLabel(node)
    return label.includes(debouncedSearch)
  })

  const res: T[] = includeKeywordNodes

  function addParentNode2Result(node: T) {
    const parent = fullData.find((item) => item.childrenId?.includes(node.id))
    if (parent && !res.includes(parent)) {
      res.push(parent)
      addParentNode2Result(parent)
    }
  }
  includeKeywordNodes.forEach((node) => {
    addParentNode2Result(node)
  })
  return res
}
