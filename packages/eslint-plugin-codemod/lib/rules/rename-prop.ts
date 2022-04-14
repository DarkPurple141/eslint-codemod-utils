import type { Rule } from 'eslint'
import {
  ImportDeclaration,
  jsxAttribute,
  JSXAttribute,
  jsxIdentifier,
  JSXOpeningElement,
  RuleListener,
} from 'eslint-codemod-utils'

export interface UpdatePropNameOptions {
  source: string
  specifier: string
  oldProp: string
  newProp: string
}

const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Dummy rule that changes a prop name in a dummy component using ast-helpers',
      recommended: true,
    },
    fixable: 'code',
    schema: {
      description:
        'A representation of a person, company, organization, or place',
      type: 'array',
      items: { $ref: '#/$defs/specifier' },
      $defs: {
        specifier: {
          type: 'object',
          required: ['source', 'specifier'],
          properties: {
            source: {
              type: 'string',
              description: 'The name of the vegetable.',
            },
            specifier: {
              type: 'string',
              description: 'Do I like this vegetable?',
            },
            oldProp: {
              type: 'string',
              description: 'Do I like this vegetable?',
            },
            newProp: {
              type: 'string',
              description: 'Do I like this vegetable?',
            },
          },
        },
      },
    },
  },
  // @ts-ignore
  create(context): RuleListener {
    const config = context.options as UpdatePropNameOptions[]
    let importDecs: ImportDeclaration[] | null[] = config.map(() => null)

    function renameProp(
      node: JSXOpeningElement,
      importDec: ImportDeclaration,
      option: UpdatePropNameOptions
    ) {
      const specifier = importDec.specifiers.find(
        (spec) =>
          (spec.type === 'ImportSpecifier' &&
            spec.imported.name === option.specifier) ||
          (spec.type === 'ImportDefaultSpecifier' &&
            option.specifier === 'default')
      )

      // The element is imported for a different reason
      if (!specifier) {
        return
      }

      if (
        !(
          node.name.type === 'JSXIdentifier' &&
          node.name.name === specifier.local.name
        )
      ) {
        return
      }

      const toChangeAttr = node.attributes.find(
        (attr): attr is JSXAttribute => {
          if (attr.type === 'JSXAttribute') {
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
        node: node as any,
        message: 'error',
        fix(fixer) {
          const fixed = jsxAttribute({
            ...toChangeAttr,
            name: jsxIdentifier({ name: option.newProp }),
          })

          // @ts-ignore node doesn't have correct type infererence
          return fixer.replaceText(toChangeAttr, `${fixed}`)
        },
      })
    }

    return {
      // @ts-ignore
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
            renameProp(node, importDecs[i]!, config[i])
          }
        })
      },
    }
  },
}

export default rule
