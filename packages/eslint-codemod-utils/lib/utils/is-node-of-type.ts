import type { EslintCodemodUtilsBaseNode } from '../types'

export function isNodeOfType<
  T extends EslintCodemodUtilsBaseNode,
  K extends T['type']
>(
  node: EslintCodemodUtilsBaseNode,
  type: K
): node is EslintCodemodUtilsBaseNode & { type: K } {
  if (!(node && node['type'])) {
    return false
  }

  return node.type === type
}
