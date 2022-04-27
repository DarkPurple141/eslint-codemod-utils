import type { EslintCodemodUtilsBaseNode } from '../types'

export function isNodeOfType<T extends EslintCodemodUtilsBaseNode>(
  node: EslintCodemodUtilsBaseNode,
  type: T['type']
): node is T {
  if (!(node && node['type'])) {
    return false
  }

  return node.type === type
}
