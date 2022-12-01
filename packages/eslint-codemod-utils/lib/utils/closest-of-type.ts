import type { EslintNode } from '../types'
import { isNodeOfType } from './is-node-of-type'

export function closestOfType<NodeType extends EslintNode['type']>(
  node: EslintNode,
  type: NodeType
): Extract<EslintNode, { type: NodeType }> | null {
  if (isNodeOfType(node, type)) {
    return node
  }

  if (node.parent) {
    return closestOfType(node.parent, type)
  }

  return null
}
