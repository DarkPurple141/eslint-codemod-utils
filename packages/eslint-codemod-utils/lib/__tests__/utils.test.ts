import * as espree from 'espree'
import {
  closestOfType,
  hasJSXAttribute,
  insertImportSpecifier,
  removeImportSpecifier,
} from '../utils'

const ESPREE_OPTIONS = {
  ecmaVersion: 2015,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true,
  },
}

/** This is not a valid test in the non eslint runtime */
describe.skip('closestOfType', () => {
  test('basic', () => {
    const program = espree.parse('<Hello name="world"></Hello>', ESPREE_OPTIONS)
    expect(
      closestOfType(program.body[0].expression.openingElement, 'JSXElement')
    ).toHaveProperty('type', 'JSXElement')
  })
})

describe('hasJSXAttribute', () => {
  test('basic', () => {
    const { body } = espree.parse(
      '<Hello name="world"></Hello>',
      ESPREE_OPTIONS
    )
    expect(hasJSXAttribute(body[0].expression, 'name')).to.be.true
  })

  test('no attribute on jsx', () => {
    const { body } = espree.parse('<Hello></Hello>', ESPREE_OPTIONS)
    expect(hasJSXAttribute(body[0].expression, 'name')).to.be.false
  })

  test('is not jsx', () => {
    const { body } = espree.parse('1 + 1', ESPREE_OPTIONS)
    expect(hasJSXAttribute(body[0].expression, 'name')).to.be.false
  })
})

describe('insertImportSpecifier', () => {
  test('basic', () => {
    const { body } = espree.parse(`import x from 'place'`, ESPREE_OPTIONS)
    expect(insertImportSpecifier(body[0], 'name').toString()).eq(
      `import x, { name } from 'place'`
    )
  })

  test('no default', () => {
    const { body } = espree.parse(
      `import { nothing } from 'place'`,
      ESPREE_OPTIONS
    )
    expect(insertImportSpecifier(body[0], 'name').toString()).eq(
      `import { nothing, name } from 'place'`
    )
  })

  test('with alias', () => {
    const { body } = espree.parse(`import x from 'place'`, ESPREE_OPTIONS)
    expect(insertImportSpecifier(body[0], 'name', 'alias').toString()).eq(
      `import x, { name as alias } from 'place'`
    )
  })
})

describe('removeImportSpecifier', () => {
  test('no default', () => {
    const { body } = espree.parse(
      `import { nothing, name } from 'place'`,
      ESPREE_OPTIONS
    )
    expect(removeImportSpecifier(body[0], 'name').toString()).eq(
      `import { nothing } from 'place'`
    )
  })

  test('with alias', () => {
    const { body } = espree.parse(
      `import x, { name as alias } from 'place'`,
      ESPREE_OPTIONS
    )
    expect(removeImportSpecifier(body[0], 'name').toString()).eq(
      `import x from 'place'`
    )
  })
})
