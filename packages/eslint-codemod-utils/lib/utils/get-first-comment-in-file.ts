import type { SourceCode } from 'eslint'
import type { Comment } from 'estree-jsx'

export function getFirstCommentInFile(source: SourceCode): Comment {
  return source.getAllComments()[0]
}
