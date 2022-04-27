import type { EslintNode } from '../types'
import { isNodeOfType } from './is-node-of-type'

export function closestOfType<T extends EslintNode>(
  node: EslintNode,
  type: T['type']
): EslintNode | null {
  if (isNodeOfType(node, type)) {
    return node
  }

  if (node.parent) {
    return closestOfType(node.parent, type)
  }

  return null
}
