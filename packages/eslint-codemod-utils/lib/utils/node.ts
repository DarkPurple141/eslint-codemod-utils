import { typeToHelperLookup } from '../constants'
import * as estree from 'estree'

type NodeMap = typeof typeToHelperLookup
type NodeType = keyof NodeMap

interface ESTreeNode {
  type: NodeType
}

export const node = <Node extends ESTreeNode | estree.Expression>(
  node: Node
): NodeMap[NodeType] => {
  return typeToHelperLookup[node.type](node as any)
}
