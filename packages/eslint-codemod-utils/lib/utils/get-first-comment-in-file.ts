import type { SourceCode } from 'eslint'
import type { TSESTree } from '@typescript-eslint/types'

export function getFirstCommentInFile(source: SourceCode): TSESTree.Comment {
  return source.getAllComments()[0] as unknown as TSESTree.Comment
}
