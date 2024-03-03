import type { ESLintNode } from '../types'

/**
 * Given a valid node return true if the node is of the specified type.
 *
 * This function uses the `is` assertion to resolve the correct TS type for the consumer.
 *
 * @return boolean
 */
export function isNodeOfType<T extends ESLintNode, K extends T['type']>(
  node: unknown,
  type: K
): node is Extract<ESLintNode, { type: K }> {
  if (typeof node !== 'object' || node === null) {
    return false
  }

  if (!('type' in node)) {
    return false
  }

  return node.type === type
}
