import type { ESLintNode } from '../types'
import { isNodeOfType } from './is-node-of-type'

/**
 * Traverses the node's parents until the specified `type` is found. If no `type` is found
 * in the traversal it will return `null`.
 */
export function closestOfType<NodeType extends ESLintNode['type']>(
  node: ESLintNode,
  type: NodeType
): Extract<ESLintNode, { type: NodeType }> | null {
  if (isNodeOfType(node, type)) {
    return node
  }

  if (node.parent) {
    return closestOfType(node.parent, type)
  }

  return null
}
