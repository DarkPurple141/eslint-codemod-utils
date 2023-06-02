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

  test('parsed non-null ts expression', () => {
    const { body } = espree.parse(`inputEl.current!.select()`, ESPREE_OPTIONS)
    expect(node(body[0]).toString()).eq(`inputEl.current!.select()`)
  })

  test('parsed keyword assertions', () => {
    const { body } = espree.parse(
      `"10" as any as unknown as null as boolean`,
      ESPREE_OPTIONS
    )
    expect(node(body[0]).toString()).eq(
      `"10" as any as unknown as null as boolean`
    )
  })

  test('parsed ts union & intersection types', () => {
    const { body } = espree.parse(
      `type X = 'hello' | 'thing' & 8`,
      ESPREE_OPTIONS
    )
    expect(node(body[0]).toString()).eq(`type X = 'hello' | 'thing' & 8`)
  })

  test('parsed ts union & intersection types with generic', () => {
    const { body } = espree.parse(
      `type X<T> = 'hello' | 'thing' & 8`,
      ESPREE_OPTIONS
    )
    expect(node(body[0]).toString()).eq(`type X<T> = 'hello' | 'thing' & 8`)
  })
})
