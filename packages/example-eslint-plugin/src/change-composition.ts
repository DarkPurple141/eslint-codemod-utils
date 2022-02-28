import { Rule } from 'eslint'
import {
  ImportDeclaration,
  ImportDefaultSpecifier,
  JSXAttribute,
  JSXElement,
} from 'estree-jsx'
import {
  identifier,
  importDeclaration,
  importSpecifier,
  jsxClosingElement,
  jsxElement,
  jsxExpressionContainer,
  jsxIdentifier,
  jsxOpeningElement,
  jsxText,
  whiteSpace,
} from 'eslint-codemod-utils'

const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Dummy rule that changes a component prop to a composed prop in a dummy component using ast-helpers',
      recommended: true,
    },
    fixable: 'code',
  },
  create(context) {
    let importNode: ImportDeclaration = null

    return {
      ImportDeclaration(node) {
        if (!node) return

        if (node.source.value === '@atlaskit/modal-dialog') {
          importNode = node
        }
      },
      JSXElement(_node: any) {
        const node: JSXElement = _node

        if (!importNode) {
          return
        }

        const { openingElement } = node

        if (openingElement.name.type !== 'JSXIdentifier') {
          return
        }

        const localDefaultImport = importNode.specifiers.find(
          (spec): spec is ImportDefaultSpecifier =>
            spec.type === 'ImportDefaultSpecifier'
        )

        if (openingElement.name.name !== localDefaultImport.local.name) {
          return
        }

        // From here we're dealing with a JSX element of the right type
        const headingAttribute = openingElement.attributes.find(
          (attr): attr is JSXAttribute =>
            attr.type === 'JSXAttribute' && attr?.name?.name === 'heading'
        )

        if (!headingAttribute) {
          return
        }

        context.report({
          node: node as any,
          message: 'error',
          fix(fixer) {
            const modalHeaderIdentifer = jsxIdentifier({ name: 'ModalHeader' })
            const fixed =
              '(\n' +
              ''.padStart(node.loc.start.column, ' ') +
              String(
                jsxElement({
                  loc: node.loc,
                  openingElement: jsxOpeningElement({
                    ...node?.openingElement,
                    selfClosing: false,
                    attributes: node.openingElement.attributes.filter(
                      (att) =>
                        !(
                          att.type === 'JSXAttribute' &&
                          att.name.name === 'heading'
                        )
                    ),
                  }),
                  closingElement: jsxClosingElement(
                    node?.closingElement || node.openingElement
                  ),
                  children: (node.children || []).concat(
                    jsxElement({
                      // @ts-expect-error
                      loc: { start: { column: node.loc.start.column + 2 } },
                      openingElement: jsxOpeningElement({
                        name: modalHeaderIdentifer,
                        selfClosing: false,
                        attributes: [],
                      }),
                      closingElement: jsxClosingElement({
                        name: modalHeaderIdentifer,
                      }),
                      children: [
                        // JSXText case
                        headingAttribute.value.type === 'Literal' &&
                        typeof headingAttribute.value.value === 'string'
                          ? // @ts-ignore
                            jsxText(headingAttribute.value)
                          : headingAttribute.value.type === 'JSXElement'
                          ? jsxElement(headingAttribute.value)
                          : jsxExpressionContainer({
                              // @ts-expect-error TODO deal with ChainExpression
                              expression: headingAttribute.value,
                            }),
                      ],
                    })
                  ),
                })
              ) +
              `\n${whiteSpace(node.loc)})`

            const fixes = [fixer.replaceText(node as any, fixed)]

            if (
              !importNode.specifiers.some(
                (spec) =>
                  spec.type === 'ImportSpecifier' &&
                  spec.imported.name === 'ModalHeader'
              )
            ) {
              const namedImport = importSpecifier({
                local: identifier({ name: 'ModalHeader' }),
                imported: identifier({ name: 'ModalHeader' }),
              })
              fixes.push(
                fixer.replaceText(
                  importNode,
                  String(
                    importDeclaration({
                      ...importNode,
                      specifiers: (importNode.specifiers || []).concat(
                        namedImport
                      ),
                    })
                  )
                )
              )
            }

            return fixes
          },
        })
      },
    }
  },
}

export default rule
