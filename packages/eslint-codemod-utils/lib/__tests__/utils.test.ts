import * as espree from 'espree'
import { closestOfType, hasJSXAttribute } from '../utils/utils'

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
    console.log(program.body[0].expression)
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
