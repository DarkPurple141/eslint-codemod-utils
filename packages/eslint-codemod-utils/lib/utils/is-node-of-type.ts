import type { EslintNode } from '../types'

export function isNodeOfType<T extends EslintNode, K extends T['type']>(
  node: EslintNode,
  type: K
): node is Extract<EslintNode, { type: K }> {
  if (!(node && node['type'])) {
    return false
  }

  return node.type === type
}
