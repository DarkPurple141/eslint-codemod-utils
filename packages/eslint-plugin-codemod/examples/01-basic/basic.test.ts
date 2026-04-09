import { ESLintUtils } from '@typescript-eslint/utils'

import ecuRule from './ecu'
import rule from './standard'

const ruleTester = new ESLintUtils.RuleTester({
  parser: '@typescript-eslint/parser',
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
      errors: [{ messageId: 'missingSemi' }],
      output: 'import world from "hello";',
    },
    {
      code: 'const x = 10',
      errors: [{ messageId: 'missingSemi' }],
      output: 'const x = 10;',
    },
  ],
})

ruleTester.run('basic/example-ecu', ecuRule, {
  valid: ['import world from "hello";', 'const x = 10;'],
  invalid: [
    {
      code: 'import world from "hello"',
      errors: [{ messageId: 'missingSemi' }],
      output: 'import world from "hello";',
    },
    {
      code: 'const x = 10',
      errors: [{ messageId: 'missingSemi' }],
      output: 'const x = 10;',
    },
  ],
})
