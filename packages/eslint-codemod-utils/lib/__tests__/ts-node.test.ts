import { literal, node, tsAsExpression } from '..'

import * as espree from '@typescript-eslint/parser'

const ESPREE_OPTIONS = {
  ecmaVersion: 2015,
  sourceType: 'module',
} as const

describe('tsAsExpression', () => {
  test('basic', () => {
    expect(
      String(
        tsAsExpression({
          // @ts-expect-error
          expression: literal('hello'),
          // @ts-expect-error
          typeAnnotation: literal({ value: 'any' }),
        })
      )
    ).eq(`'hello' as any`)
  })

  test('parsed with as string keyword', () => {
    const { body } = espree.parse(`const x = 'hello' as string`, ESPREE_OPTIONS)
    expect(node(body[0]).toString()).eq(`const x = 'hello' as string`)
  })

  test('parsed with as type', () => {
    const { body } = espree.parse(`const x = 'hello' as World`, ESPREE_OPTIONS)
    expect(node(body[0]).toString()).eq(`const x = 'hello' as World`)
  })

  test('parsed with as type with type parameter', () => {
    const { body } = espree.parse(
      `"2" as React.Ref<HTMLDivElement>`,
      ESPREE_OPTIONS
    )
    expect(node(body[0]).toString()).eq(`"2" as React.Ref<HTMLDivElement>`)
  })

  test('parsed with as type with type parameter', () => {
    const { body } = espree.parse(
      `"2" as React.Ref<HTMLDivElement, true>`,
      ESPREE_OPTIONS
    )
    expect(node(body[0]).toString()).eq(
      `"2" as React.Ref<HTMLDivElement, true>`
    )
  })
})
