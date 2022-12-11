import type { EslintNode } from '../types'

/**
 * Given a valid node return true if the node is of the specified type.
 *
 * This function uses the `is` assertion to resolve the correct TS type for the consumer.
 *
 * @return boolean
 */
export function isNodeOfType<T extends EslintNode, K extends T['type']>(
  node: EslintNode,
  type: K
): node is Extract<EslintNode, { type: K }> {
  if (!(node && node['type'])) {
    return false
  }

  return node.type === type
}
