import type { EslintNode } from '../types'
import { isNodeOfType } from './is-node-of-type'

export function closestOfType<
  T extends EslintNode,
  K extends EslintNode['type']
>(node: T, type: K): Extract<EslintNode, { type: K }> | null {
  if (isNodeOfType(node, type)) {
    return node
  }

  if (node.parent) {
    return closestOfType(node.parent, type)
  }

  return null
}
