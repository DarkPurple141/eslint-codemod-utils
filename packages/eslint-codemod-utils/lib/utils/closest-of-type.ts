import type { EslintNode } from '../types'
import { isNodeOfType } from './is-node-of-type'

export function closestOfType<T extends EslintNode, K extends T['type']>(
  node: T,
  type: K
): (EslintNode & { type: K }) | null {
  if (isNodeOfType(node, type)) {
    return node
  }

  if (node.parent) {
    // @ts-ignore
    return closestOfType(node.parent, type)
  }

  return null
}
