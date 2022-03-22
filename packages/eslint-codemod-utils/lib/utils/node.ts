import { typeToHelperLookup } from '../constants'
import * as estree from 'estree'

type NodeMap = typeof typeToHelperLookup
type NodeType = keyof NodeMap

interface ESTreeNode {
  type: NodeType
}

export const node = <
  Node extends
    | ESTreeNode
    | estree.Expression
    | estree.Statement
    | estree.Pattern
>(
  node: Node
): NodeMap[NodeType] => {
  if (!node) {
    return node
  }
  // @ts-expect-error
  return typeToHelperLookup[node.type](node)
}
