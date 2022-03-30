import * as espree from 'espree'
import { hasJSXAttribute } from '../utils/utils'

const ESPREE_OPTIONS = {
  ecmaVersion: 2015,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true,
  },
}

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
