import { RuleTester } from 'eslint'

import ecuRule from './ecu'
import rule from './standard'

const ruleTester = new RuleTester({
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
})

ruleTester.run('basic/example', rule, {
  valid: ['import world from "hello";', 'const x = 10;'],
  invalid: [
    {
      code: 'import world from "hello"',
      errors: ['error'],
      output: 'import world from "hello";',
    },
    {
      code: 'const x = 10',
      errors: ['error'],
      output: 'const x = 10;',
    },
  ],
})

ruleTester.run('basic/example-ecu', ecuRule, {
  valid: ['import world from "hello";', 'const x = 10;'],
  invalid: [
    {
      code: 'import world from "hello"',
      errors: ['error'],
      output: 'import world from "hello";',
    },
    {
      code: 'const x = 10',
      errors: ['error'],
      output: 'const x = 10;',
    },
  ],
})
