import { AST_TOKEN_TYPES } from '@typescript-eslint/types'
import {
  callExpression,
  comment,
  doWhileStatement,
  exportAllDeclaration,
  identifier,
  ifStatement,
  importDeclaration,
  importDefaultSpecifier,
  importSpecifier,
  jsxAttribute,
  jsxClosingElement,
  jsxElement,
  jsxExpressionContainer,
  jsxIdentifier,
  jsxMemberExpression,
  jsxOpeningElement,
  jsxSpreadAttribute,
  jsxText,
  literal,
  memberExpression,
  node as nodeFn,
  objectExpression,
  property,
  staticBlock,
  throwStatement,
  unaryExpression,
  variableDeclaration,
} from '..'

import * as espree from 'espree'

const ESPREE_OPTIONS = {
  ecmaVersion: 2015,
  sourceType: 'module',
}

describe('literal', () => {
  test('string', () => {
    expect(String(literal('hello'))).eq('hello')
  })

  test('boolean', () => {
    expect(String(literal(true))).eq(`true`)
  })

  test('null', () => {
    expect(String(literal(null))).eq(`null`)
  })

  test('number', () => {
    expect(String(literal(9))).eq(`9`)
  })
})

describe('exportAllDeclaration', () => {
  test('basic', () => {
    expect(
      String(
        exportAllDeclaration({
          exported: null,
          assertions: [],
          exportKind: 'value',
          source: literal('@atlaskit/modal-dialog'),
        })
      )
    ).eq(`export * from '@atlaskit/modal-dialog'`)
  })

  test('with alias', () => {
    expect(
      String(
        exportAllDeclaration({
          exported: identifier('modal'),
          exportKind: 'value',
          assertions: [],
          source: literal('@atlaskit/modal-dialog'),
        })
      )
    ).eq(`export * as modal from '@atlaskit/modal-dialog'`)
  })
})

describe('importDeclaration', () => {
  test('basic', () => {
    expect(
      String(
        importDeclaration({
          specifiers: [],
          assertions: [],
          importKind: 'value',
          source: literal('@atlaskit/modal-dialog'),
        })
      )
    ).eq(`import '@atlaskit/modal-dialog'`)
  })

  test('basic - espress', () => {
    const { body } = espree.parse(
      `import '@atlaskit/modal-dialog'`,
      ESPREE_OPTIONS
    )
    expect(importDeclaration(body[0]).toString()).eq(
      `import '@atlaskit/modal-dialog'`
    )
  })

  test('basic named import', () => {
    expect(
      String(
        importDeclaration({
          importKind: 'value',
          assertions: [],
          specifiers: [
            importSpecifier({
              importKind: 'value',
              imported: identifier({ name: 'Hello' }),
              local: identifier({ name: 'Hello' }),
            }),
          ],
          source: literal('@atlaskit/modal-dialog'),
        })
      )
    ).eq(`import { Hello } from '@atlaskit/modal-dialog'`)
  })

  test('basic default import', () => {
    expect(
      String(
        importDeclaration({
          specifiers: [
            importDefaultSpecifier({
              local: identifier({ name: 'Hello' }),
            }),
          ],
          assertions: [],
          importKind: 'value',
          source: literal('@atlaskit/modal-dialog'),
        })
      )
    ).eq(`import Hello from '@atlaskit/modal-dialog'`)
  })

  test('basic default + named imports', () => {
    expect(
      String(
        importDeclaration({
          assertions: [],
          importKind: 'value',
          specifiers: [
            importDefaultSpecifier({
              local: identifier({ name: 'Hello' }),
            }),
            importSpecifier({
              importKind: 'value',
              imported: identifier({ name: 'Bongo' }),
              local: identifier({ name: 'Bongo' }),
            }),
          ],
          source: literal('@atlaskit/modal-dialog'),
        })
      )
    ).eq(`import Hello, { Bongo } from '@atlaskit/modal-dialog'`)
  })

  test('multiple named imports', () => {
    expect(
      String(
        importDeclaration({
          assertions: [],
          importKind: 'value',
          specifiers: [
            importSpecifier({
              imported: identifier({ name: 'Bongo' }),
              local: identifier({ name: 'Bongo' }),
              importKind: 'value',
            }),
            importSpecifier({
              imported: identifier({ name: 'Congo' }),
              local: identifier({ name: 'Congo' }),
              importKind: 'value',
            }),
            importSpecifier({
              imported: identifier({ name: 'Jongo' }),
              local: identifier({ name: 'Jongo' }),
              importKind: 'value',
            }),
          ],
          source: literal('@atlaskit/modal-dialog'),
        })
      )
    ).eq(`import { Bongo, Congo, Jongo } from '@atlaskit/modal-dialog'`)
  })

  test('with aliasing', () => {
    expect(
      importDeclaration({
        importKind: 'value',
        assertions: [],
        specifiers: [
          importSpecifier({
            imported: identifier({ name: 'Bongo' }),
            local: identifier({ name: 'BongoMan' }),
            importKind: 'value',
          }),
          importSpecifier({
            imported: identifier({ name: 'Congo' }),
            local: identifier({ name: 'CongoMan' }),
            importKind: 'value',
          }),
          importSpecifier({
            imported: identifier({ name: 'Jongo' }),
            local: identifier({ name: 'JongoGirl' }),
            importKind: 'value',
          }),
        ],
        source: literal('@atlaskit/modal-dialog'),
      }).toString()
    ).eq(
      `import { Bongo as BongoMan, Congo as CongoMan, Jongo as JongoGirl } from '@atlaskit/modal-dialog'`
    )
  })
})

describe('jsxClosingElement', () => {
  test('basic', () => {
    expect(
      jsxClosingElement({
        name: jsxIdentifier({ name: 'Modal' }),
      }).toString()
    ).eq(`</Modal>`)
  })

  test('with member expression', () => {
    expect(
      String(
        jsxClosingElement({
          name: jsxMemberExpression({
            object: jsxIdentifier({ name: 'AK' }),
            property: jsxIdentifier({ name: 'Modal' }),
          }),
        })
      )
    ).eq(`</AK.Modal>`)
  })
})

describe('jsxMemberExpression', () => {
  test('basic', () => {
    expect(
      jsxMemberExpression({
        object: jsxIdentifier({ name: 'AK' }),
        property: jsxIdentifier({ name: 'Modal' }),
      }).toString()
    ).eq('AK.Modal')
  })
})

describe('unaryExpression', () => {
  test('basic', () => {
    expect(
      unaryExpression({
        operator: 'typeof',
        argument: identifier('x'),
        prefix: true,
      }).toString()
    ).eq('typeof x')
  })
})

describe('objectExpression', () => {
  test('basic', () => {
    expect(
      objectExpression({
        properties: [
          property({
            shorthand: false,
            computed: false,
            kind: 'init',
            method: false,
            key: identifier('hello'),
            value: identifier('world'),
          }),
        ],
      }).toString()
    ).eq('{\n  hello: world\n}')
  })

  test('via the parser', () => {
    expect(
      nodeFn(
        espree.parse(
          `const y = {\nhello: 'world',\n  [thing]: 'bro',\n  [thing]() {},\n  [thing]: () => {},\n  get x() {}\n}`,
          ESPREE_OPTIONS
        ).body[0]
      ).toString()
    ).eq(
      `const y = {\n  hello: 'world',\n  [thing]: 'bro',\n  [thing]: function () {},\n  [thing]: () => {},\n  get x() {}\n}`
    )
  })
})

describe('memberExpression', () => {
  test('basic', () => {
    expect(
      memberExpression({
        object: identifier('hello'),
        property: identifier('x'),
        computed: false,
        optional: false,
      }).toString()
    ).eq('hello.x')
  })

  test('computed', () => {
    expect(
      memberExpression({
        object: identifier('hello'),
        property: identifier('x'),
        optional: false,
        computed: true,
      }).toString()
    ).eq('hello[x]')
  })
})

describe('jsxSpeadAttribute', () => {
  test('basic', () => {
    expect(
      jsxSpreadAttribute({
        argument: identifier({ name: 'spread' }),
      }).toString()
    ).eq('{...spread}')
  })

  test('callExpression', () => {
    expect(
      jsxSpreadAttribute({
        argument: callExpression({
          optional: false,
          callee: identifier({ name: 'spread' }),
          arguments: [],
        }),
      }).toString()
    ).eq('{...spread()}')
  })

  test('optional callExpression', () => {
    expect(
      jsxSpreadAttribute({
        argument: callExpression({
          callee: identifier({ name: 'spread' }),
          arguments: [],
          optional: true,
        }),
      }).toString()
    ).eq('{...spread?.()}')
  })
})

describe('jsxElement', () => {
  test('basic', () => {
    expect(
      '\n' +
        String(
          jsxElement({
            openingElement: jsxOpeningElement({
              selfClosing: false,
              attributes: [],
              name: jsxIdentifier({ name: 'Modal' }),
            }),
            closingElement: jsxClosingElement({
              name: jsxIdentifier({ name: 'Modal' }),
            }),
            children: [
              jsxExpressionContainer({
                expression: identifier({ name: 'hello' }),
              }),
            ],
          })
        )
    ).eq(`
<Modal>
  {hello}
</Modal>`)
  })

  test('with attributes', () => {
    expect(
      '\n' +
        String(
          jsxElement({
            openingElement: jsxOpeningElement({
              selfClosing: false,
              attributes: [
                jsxAttribute({
                  name: jsxIdentifier({ name: 'isOpen' }),
                  value: jsxExpressionContainer({
                    expression: literal(true),
                  }),
                }),
                jsxAttribute({
                  name: jsxIdentifier({ name: 'onClick' }),
                  value: jsxExpressionContainer({
                    expression: identifier({ name: 'onClick' }),
                  }),
                }),
              ],
              name: jsxIdentifier({ name: 'Modal' }),
            }),
            closingElement: jsxClosingElement({
              name: jsxIdentifier({ name: 'Modal' }),
            }),
            children: [
              jsxExpressionContainer({
                expression: identifier({ name: 'hello' }),
              }),
            ],
          })
        )
    ).eq(`
<Modal isOpen={true} onClick={onClick}>
  {hello}
</Modal>`)
  })

  test('multiple children', () => {
    expect(
      '\n' +
        String(
          jsxElement({
            openingElement: jsxOpeningElement({
              attributes: [],
              selfClosing: false,
              name: jsxIdentifier({ name: 'Modal' }),
            }),
            closingElement: jsxClosingElement({
              name: jsxIdentifier({ name: 'Modal' }),
            }),
            children: [
              jsxExpressionContainer({
                expression: identifier({ name: 'hello' }),
              }),
              jsxElement({
                openingElement: jsxOpeningElement({
                  selfClosing: true,
                  attributes: [],
                  name: jsxIdentifier({ name: 'BadPeople' }),
                }),
                children: [],
                closingElement: null,
              }),
            ],
          })
        )
    ).eq(`
<Modal>
  {hello}
  <BadPeople />
</Modal>`)
  })
  test('nested children', () => {
    expect(
      '\n' +
        String(
          jsxElement({
            openingElement: jsxOpeningElement({
              attributes: [],
              selfClosing: false,
              name: jsxIdentifier({ name: 'Modal' }),
            }),
            closingElement: jsxClosingElement({
              name: jsxIdentifier({ name: 'Modal' }),
            }),
            children: [
              jsxExpressionContainer({
                expression: identifier({ name: 'hello' }),
              }),
              jsxElement({
                loc: {
                  start: { column: 2, line: 0 },
                  end: { column: 10, line: 0 },
                },
                openingElement: jsxOpeningElement({
                  attributes: [],
                  selfClosing: false,
                  name: jsxIdentifier({ name: 'BadPeople' }),
                }),
                children: [
                  jsxElement({
                    // @ts-expect-error
                    loc: { start: { column: 4 } },
                    children: [jsxText({ value: 'Hi', raw: '"Hi"' })],
                    closingElement: jsxClosingElement({
                      name: jsxIdentifier({ name: 'VeryNested' }),
                    }),
                    openingElement: jsxOpeningElement({
                      attributes: [],
                      selfClosing: true,
                      name: jsxIdentifier({ name: 'VeryNested' }),
                    }),
                  }),
                ],
                closingElement: jsxClosingElement({
                  name: jsxIdentifier({ name: 'BadPeople' }),
                }),
              }),
            ],
          })
        )
    ).eq(`
<Modal>
  {hello}
  <BadPeople>
    <VeryNested>
      Hi
    </VeryNested>
  </BadPeople>
</Modal>`)
  })
})

describe('staticBlock', () => {
  test('basic', () => {
    expect(staticBlock({ body: [] }).toString()).eq(`static {\n\n}`)
  })
})

describe('doWhileStatement', () => {
  test('basic', () => {
    const testString = [
      `do {`,
      `  console.log('work')`,
      `} while (1 < 3)`,
    ].join('\n')
    const { body } = espree.parse(testString)
    expect(doWhileStatement(body[0]).toString()).eq(testString)
  })
})

describe('ifStatement', () => {
  test('basic', () => {
    const testString = [
      `if (1 < 3) {} else if (1 == 0) {`,
      `  console.log('success')`,
      `} else {`,
      `  console.log('error')`,
      `}`,
    ].join('\n')
    const { body } = espree.parse(testString)
    expect(ifStatement(body[0]).toString()).eq(testString)
  })
})

describe('throwStatement', () => {
  test('basic', () => {
    const testString = [`throw new Error();`].join('\n')
    const { body } = espree.parse(testString)
    expect(throwStatement(body[0]).toString()).eq(testString)
  })
})

describe('jsxOpeningElement', () => {
  test('with comment', () => {
    const commentValue = 'Hello this is a comment'
    expect(
      jsxOpeningElement({
        leadingComments: [
          comment({ value: commentValue, type: AST_TOKEN_TYPES.Line }),
        ],
        name: jsxIdentifier({ name: 'Modal' }),
        attributes: [],
        selfClosing: true,
      }).toString()
    ).eq(`// ${commentValue}\n<Modal />`)
  })
  test('with comments', () => {
    const commentValue = 'Hello this is a comment'
    expect(
      jsxOpeningElement({
        leadingComments: [
          comment({ value: commentValue, type: AST_TOKEN_TYPES.Line }),
          comment({ value: 'Second line', type: AST_TOKEN_TYPES.Line }),
        ],
        name: jsxIdentifier('Modal'),
        attributes: [],
        selfClosing: true,
      }).toString()
    ).eq(`// ${commentValue}\n// Second line\n<Modal />`)
  })

  test('no attributes', () => {
    expect(
      jsxOpeningElement({
        name: jsxIdentifier('Modal'),
        attributes: [],
        selfClosing: true,
      }).toString()
    ).eq(`<Modal />`)
  })

  test('no attributes not-self closing', () => {
    expect(
      jsxOpeningElement({
        selfClosing: false,
        attributes: [],
        name: jsxIdentifier('Modal'),
      }).toString()
    ).eq(`<Modal>`)
  })
})

describe('TaggedTemplateExpression', () => {
  test('basic', () => {
    const testString = `const x = css\`color: red;\``
    const { body } = espree.parse(testString, ESPREE_OPTIONS)
    expect(variableDeclaration(body[0]).toString()).eq(testString)
  })
})
