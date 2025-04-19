import type { Draft } from 'immer'
import { isNil } from 'lodash-es'
import { useState } from 'react'
import { type Updater, useImmer } from 'use-immer'
import type { EasyId, EasyNode } from '../utils'

export type UseEasyTreeReturn<T extends EasyNode = EasyNode> = {
  data: T[]
  selectedId: EasyId | null
  setSelectedId: (id: EasyId | null) => void
  setData: Updater<T[]>
  createNode: (
    parentId: EasyId | null,
    newNode: Draft<Omit<T, 'childrenId' | 'pathId'>>,
  ) => void
  updateNode: (id: EasyId, node: Draft<T>) => void
  deleteNode: (id: EasyId) => void
  expandedId: EasyId[]
  setExpandedId: (id: EasyId[]) => void
}

export function useEasyTree<T extends EasyNode>(): UseEasyTreeReturn<T> {
  const emptyIds: EasyId[] = []

  const [selectedId, setSelectedId] = useState<EasyId | null>(null)

  const [expandedId, setExpandedId] = useState<EasyId[]>(emptyIds)

  const emptyData: T[] = []
  const [data, setData] = useImmer<T[]>(emptyData)

  const createNode: UseEasyTreeReturn<T>['createNode'] = (
    parentId,
    newNode,
  ) => {
    // root

    if (isNil(parentId)) {
      setData((draft) => {
        draft.push(newNode as Draft<T>)
      })
      // auto select
      setSelectedId((newNode as Draft<T>).id)
      return
    }

    // not root
    const parentIndex = data.findIndex((x) => x.id === parentId)
    if (parentIndex === -1) throw new Error('no node')

    setData((draft) => {
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
    setData((draft) => {
      const index = data.findIndex((x) => x.id === id)
      if (index === -1) throw new Error('no node')

      draft[index] = node
    })
    setSelectedId(node.id)
  }

  const deleteNode: UseEasyTreeReturn<T>['deleteNode'] = (id: EasyId) => {
    setData((draft) => {
      const index = data.findIndex((x) => x.id === id)
      if (index === -1) throw new Error('no node')

      const node = draft[index]
      if (!node) throw new Error('no node')
      const parentIndex = data.findIndex((item) =>
        item.childrenId?.includes(node?.id),
      )
      const parent = draft[parentIndex]
      if (parent) {
        parent.childrenId = parent.childrenId?.filter((p) => p !== id)
      }

      draft.splice(index, 1)
    })
  }

  return {
    selectedId,
    setSelectedId,
    data,
    setData,
    deleteNode,
    updateNode,
    createNode,
    expandedId: expandedId,
    setExpandedId,
  }
}
