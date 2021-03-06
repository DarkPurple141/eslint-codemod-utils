import type { Rule } from 'eslint'
import { hash } from '../hash'

const SIGNATURE_HEADER = 'AUTOGENERATED CODEMOD SIGNATURE'
const TODO_COMMENT = 'TODO: This is a codemod generated comment.'
const HEADER_REGEX = /(codemod-hash-\d+)/g

/**
 * If there is the presence of a header we then check all comments to verify if they have matching hashes with the header
 */
const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Errors if a block has a codemod generated comment in it',
      recommended: true,
    },
    messages: {
      noHashInSource:
        'The file {{ file }} includes a comment generated by a codemod. This comment requires further manual verification.',
      noHashMatch:
        'The file {{ file }} includes a comment generated by a codemod but its hash <{{expectedHashValue}}> does not match the header <{{currentHashValue}}>. Please rerun the codemod, or if the codemod changes are now verified - remove the comment and header from the file.',
    },
  },
  create(context) {
    const filename = context.getFilename()
    const source = context.getSourceCode()
    const comments = source.getAllComments()
    const headerComment = comments.find((comment) =>
      comment.value.includes(SIGNATURE_HEADER)
    )

    return {
      Program() {
        if (!headerComment) {
          return
        }

        const headerSignatureMatches = Array.from(
          headerComment.value.matchAll(HEADER_REGEX)
        )
        const codemodComments = comments.filter((comment) =>
          comment.value.includes(TODO_COMMENT)
        )

        codemodComments.forEach((com, index) => {
          const currentHashValue = hash(com.value)
          const expectedHashValue = headerSignatureMatches[index]
            ? headerSignatureMatches[index][0]
            : ''

          if (currentHashValue !== expectedHashValue) {
            context.report({
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              loc: com.loc!,
              messageId: 'noHashMatch',
              data: {
                file: filename,
                expectedHashValue,
                currentHashValue,
              },
            })
          } else {
            context.report({
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              loc: com.loc!,
              messageId: 'noHashInSource',
              data: {
                file: filename,
              },
            })
          }
        })
      },
    }
  },
}

export default rule
