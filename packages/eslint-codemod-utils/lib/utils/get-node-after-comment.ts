import type * as eslint from 'eslint'
import type { Comment } from 'estree-jsx'

/**
 * @example
 * ```tsx
 * // this is the search comment
 * const findThisNode = 10
 * ^^^^^^^^^^^^^^^^^^^^^^^
 * ```
 */
export function getNodeAfterComment(
  source: eslint.SourceCode,
  comment: Comment
): eslint.Rule.Node | null {
  const token = source.getTokenAfter(comment)

  if (token) {
    return source.getNodeByRangeIndex(token.range[1]) as eslint.Rule.Node
  }

  return null
}
