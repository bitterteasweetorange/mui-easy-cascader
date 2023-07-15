type Result<T> = T & { pathLabel: string[] }
export function flatNodes<T extends { children?: T[]; label: string }>(
  nodes: T[],
  pathLabel: string[],
): Result<T>[] {
  return nodes.reduce((acc, node) => {
    const nextPathLabel = [...pathLabel, node.label]
    if (node.children) {
      return [
        ...acc,
        { ...node, pathLabel: nextPathLabel },
        ...flatNodes(node.children, nextPathLabel),
      ]
    }
    return [...acc, { ...node, pathLabel: nextPathLabel }]
  }, [] as Result<T>[])
}
