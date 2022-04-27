import type { Rule, SourceCode } from 'eslint'
import { Comment } from 'estree-jsx'

export function insertAtStartOfFile(
  fixer: Rule.RuleFixer,
  str: string
): Rule.Fix {
  return fixer.insertTextBeforeRange([0, 0], str)
}

/**
 * @example
 * ```tsx
 * // this is the search comment
 * const findThisNode = 10
 * ^^^^^^^^^^^^^^^^^^^^^^^
 * ```
 */
export function getNodeAfterComment(
  source: SourceCode,
  comment: Comment
): Rule.Node | null {
  const token = source.getTokenAfter(comment)

  if (token) {
    return source.getNodeByRangeIndex(token.range[1]) as Rule.Node
  }

  return null
}

export function getFirstCommentInFile(source: SourceCode): Comment {
  return source.getAllComments()[0]
}
