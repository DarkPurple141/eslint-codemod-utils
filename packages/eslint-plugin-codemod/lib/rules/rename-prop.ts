import { ESLintUtils } from '@typescript-eslint/utils'

import {
  ImportDeclaration,
  isNodeOfType,
  jsxAttribute,
  JSXAttribute,
  jsxIdentifier,
  JSXOpeningElement,
} from 'eslint-codemod-utils'

export interface UpdatePropNameOptions {
  source: string
  specifier: string
  oldProp: string
  newProp: string
}

const createRule = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/DarkPurple141/eslint-codemod-utils/tree/master/packages/eslint-plugin-codemod/${name}`
)

const rule = createRule<UpdatePropNameOptions[], string>({
  defaultOptions: [] as UpdatePropNameOptions[],
  name: 'jsx/rename-prop',
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Dummy rule that changes a prop name in a dummy component using ast-helpers',
      recommended: 'error',
    },
    messages: {
      renameProp:
        'The prop "{{ oldProp }}" in <{{ local }} /> has been renamed to "{{ newProp }}".',
    },
    fixable: 'code',
    schema: {
      description: 'Change any prop to another prop using eslint',
      type: 'array',
      items: {
        type: 'object',
        required: ['source', 'specifier', 'oldProp', 'newProp'],
        properties: {
          source: {
            type: 'string',
            description: 'The source path of the JSXElement import.',
          },
          specifier: {
            type: 'string',
            description:
              "The import specifier of the JSXElement being targeted - can also be simply 'default'.",
          },
          oldProp: {
            type: 'string',
            description: 'The old name of the JSX attribute',
          },
          newProp: {
            type: 'string',
            description: 'The new name of the JSX attribute',
          },
        },
      },
    },
  },
  create(context) {
    const config = context.options as UpdatePropNameOptions[]
    let importDecs: ImportDeclaration[] | null[] = config.map(() => null)

    function renameProp(
      node: JSXOpeningElement,
      importDec: ImportDeclaration,
      option: UpdatePropNameOptions
    ) {
      const specifier = importDec.specifiers.find(
        (spec) =>
          (isNodeOfType(spec, 'ImportSpecifier') &&
            spec.imported.name === option.specifier) ||
          (isNodeOfType(spec, 'ImportDefaultSpecifier') &&
            option.specifier === 'default')
      )

      // The element is imported for a different reason
      if (!specifier) {
        return
      }

      if (
        !(
          isNodeOfType(node.name, 'JSXIdentifier') &&
          node.name.name === specifier.local.name
        )
      ) {
        return
      }

      const toChangeAttr = node.attributes.find(
        (attr): attr is JSXAttribute => {
          if (isNodeOfType(attr, 'JSXAttribute')) {
            return attr.name.name === option.oldProp
          }

          return false
        }
      )

      if (!toChangeAttr) {
        return
      }

      // Error cases after this point
      context.report({
        // @ts-expect-error
        node: toChangeAttr,
        messageId: 'renameProp',
        data: { ...option, local: specifier.local.name },
        fix(fixer) {
          const fixed = jsxAttribute({
            ...toChangeAttr,
            name: jsxIdentifier(option.newProp),
          })

          // @ts-expect-error
          return fixer.replaceText(toChangeAttr, `${fixed}`)
        },
      })
    }

    return {
      'Program:exit': () => {
        config.forEach((_, index) => {
          importDecs[index] = null
        })
        importDecs = []
      },
      ImportDeclaration(node) {
        config.forEach((c, i) => {
          if (c.source === node.source.value) {
            importDecs[i] = node
          }
        })
      },
      JSXOpeningElement(node) {
        config.forEach((c, i) => {
          if (importDecs[i]) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            renameProp(node as JSXOpeningElement, importDecs[i]!, config[i])
          }
        })
      },
    }
  },
})

export default rule
