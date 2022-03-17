import { typeToHelperLookup } from '../constants'

type NodeMap = typeof typeToHelperLookup
type NodeType = keyof NodeMap

interface ESTreeNode {
  type: NodeType
}

export const node = <Node extends ESTreeNode>(
  node: Node
): NodeMap[NodeType] => {
  return typeToHelperLookup[node.type](node as any)
}
