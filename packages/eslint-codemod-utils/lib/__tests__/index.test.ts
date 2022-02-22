import { describe, expect, test } from 'vitest'
import {
  jsxClosingElement,
  jsxIdentifier,
  jsxMemberExpression,
  jsxOpeningElement,
  comment,
  jsxElement,
  jsxExpressionContainer,
  identifier,
  jsxAttribute,
  literal,
  importDeclaration,
  importSpecifier,
  importDefaultSpecifier,
  jsxText,
} from '..'

describe('importDeclaration', () => {
  test('basic', () => {
    expect(
      String(
        importDeclaration({
          specifiers: [],
          source: literal({ value: '@atlaskit/modal-dialog' }),
        })
      )
    ).eq(`import '@atlaskit/modal-dialog'`)
  })

  test('basic named import', () => {
    expect(
      String(
        importDeclaration({
          specifiers: [
            importSpecifier({
              imported: identifier({ name: 'Hello' }),
              local: identifier({ name: 'Hello' }),
            }),
          ],
          source: literal({ value: '@atlaskit/modal-dialog' }),
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
          source: literal({ value: '@atlaskit/modal-dialog' }),
        })
      )
    ).eq(`import Hello from '@atlaskit/modal-dialog'`)
  })

  test('basic default + named imports', () => {
    expect(
      String(
        importDeclaration({
          specifiers: [
            importDefaultSpecifier({
              local: identifier({ name: 'Hello' }),
            }),
            importSpecifier({
              imported: identifier({ name: 'Bongo' }),
              local: identifier({ name: 'Bongo' }),
            }),
          ],
          source: literal({ value: '@atlaskit/modal-dialog' }),
        })
      )
    ).eq(`import Hello, { Bongo } from '@atlaskit/modal-dialog'`)
  })

  test('multiple named imports', () => {
    expect(
      String(
        importDeclaration({
          specifiers: [
            importSpecifier({
              imported: identifier({ name: 'Bongo' }),
              local: identifier({ name: 'Bongo' }),
            }),
            importSpecifier({
              imported: identifier({ name: 'Congo' }),
              local: identifier({ name: 'Congo' }),
            }),
            importSpecifier({
              imported: identifier({ name: 'Jongo' }),
              local: identifier({ name: 'Jongo' }),
            }),
          ],
          source: literal({ value: '@atlaskit/modal-dialog' }),
        })
      )
    ).eq(`import { Bongo, Congo, Jongo } from '@atlaskit/modal-dialog'`)
  })

  test.todo('with aliasing')
})

describe('jsxClosingElement', () => {
  test('basic', () => {
    expect(
      String(
        jsxClosingElement({
          name: jsxIdentifier({ name: 'Modal' }),
        })
      )
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
      String(
        jsxMemberExpression({
          object: jsxIdentifier({ name: 'AK' }),
          property: jsxIdentifier({ name: 'Modal' }),
        })
      )
    ).eq('AK.Modal')
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
                    expression: literal({ value: true }),
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
              jsxElement({
                openingElement: jsxOpeningElement({
                  selfClosing: true,
                  attributes: [],
                  name: jsxIdentifier({ name: 'BadPeople' }),
                }),
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
                // @ts-expect-error
                loc: { start: { column: 2 } },
                openingElement: jsxOpeningElement({
                  attributes: [],
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

describe('jsxOpeningElement', () => {
  test('with comment', () => {
    const commentValue = 'Hello this is a comment'
    expect(
      String(
        jsxOpeningElement({
          leadingComments: [comment({ value: commentValue, type: 'Line' })],
          name: jsxIdentifier({ name: 'Modal' }),
          attributes: [],
          selfClosing: true,
        })
      )
    ).eq(`// ${commentValue}\n<Modal />`)
  })
  test('with comments', () => {
    const commentValue = 'Hello this is a comment'
    expect(
      String(
        jsxOpeningElement({
          leadingComments: [
            comment({ value: commentValue, type: 'Line' }),
            comment({ value: 'Second line', type: 'Line' }),
          ],
          name: jsxIdentifier({ name: 'Modal' }),
          attributes: [],
          selfClosing: true,
        })
      )
    ).eq(`// ${commentValue}\n// Second line\n<Modal />`)
  })

  test('no attributes', () => {
    expect(
      String(
        jsxOpeningElement({
          name: jsxIdentifier({ name: 'Modal' }),
          attributes: [],
          selfClosing: true,
        })
      )
    ).eq(`<Modal />`)
  })

  test('no attributes not-self closing', () => {
    expect(
      String(
        jsxOpeningElement({
          name: jsxIdentifier({ name: 'Modal' }),
          attributes: [],
          selfClosing: false,
        })
      )
    ).eq(`<Modal>`)
  })
})
