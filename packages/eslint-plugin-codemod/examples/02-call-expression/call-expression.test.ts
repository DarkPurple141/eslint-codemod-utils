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

ruleTester.run('call-expression/basic', rule, {
  valid: ['f({ first: oldArg })', 'f({ first: oldArg, second: otherarg  })'],
  invalid: [
    {
      code: 'f(oldArg)',
      errors: ['error'],
      output: 'f({ first: oldArg })',
    },
    // {
    //   code: 'f(oldArg, otherArg)',
    //   errors: ['error'],
    //   output: 'f({ first: oldArg, second: otherArg })',
    // },
    // {
    //   code: 'f(oldArg, { x: 1 })',
    //   errors: ['error'],
    //   output: 'f({ first: oldArg, second: { x: 1 } })',
    // },
  ],
})

ruleTester.run('call-expression/ecu', ecuRule, {
  valid: ['f({ first: oldArg })', 'f({ first: oldArg, second: otherarg  })'],
  invalid: [
    {
      code: 'f(oldArg)',
      errors: ['error'],
      output: 'f({\n  first: oldArg\n})',
    },
    {
      code: 'f(oldArg, otherArg)',
      errors: ['error'],
      output: 'f({\n  first: oldArg,\n  second: otherArg\n})',
    },
    {
      code: 'f(oldArg, { x: 1 })',
      errors: ['error'],
      output: 'f({\n  first: oldArg,\n  second: {\n  x: 1\n}\n})',
    },
  ],
})
