import { ESLintUtils } from '@typescript-eslint/utils'

import ecuRule from './ecu'
// import rule from './standard'

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

// ruleTester.run('jsx/basic', rule, {
//   valid: ['<Modal />', '<Other />', '<Modal><ModalTitle /></Modal>'],
//   invalid: [
//     {
//       code: '<Modal title="blah" />',
//       errors: [{ messageId: 'compose' }],
//       output: '<Modal>\n  <ModalTitle>\n  blah\n</ModalTitle>\n</Modal>',
//     },
//     {
//       code: '<Modal title={blah} />',
//       errors: [{ messageId: 'compose' }],
//       output: '<Modal>\n  <ModalTitle>\n  {blah}\n</ModalTitle>\n</Modal>',
//     },
//     {
//       code: '<Modal title={<Blah />} />',
//       errors: [{ messageId: 'compose' }],
//       output: '<Modal>\n  <ModalTitle>\n  {<Blah />}\n</ModalTitle>\n</Modal>',
//     },
//   ],
// })

ruleTester.run('jsx/ecu', ecuRule, {
  valid: ['<Modal />', '<Other />', '<Modal><ModalTitle /></Modal>'],
  invalid: [
    {
      code: '<Modal title="blah" />',
      errors: [{ messageId: 'compose' }],
      output: '<Modal>\n  <ModalTitle>\n  blah\n</ModalTitle>\n</Modal>',
    },
    {
      code: '<Modal title={blah} />',
      errors: [{ messageId: 'compose' }],
      output: '<Modal>\n  <ModalTitle>\n  {blah}\n</ModalTitle>\n</Modal>',
    },
    {
      code: '<Modal title={<Blah />} />',
      errors: [{ messageId: 'compose' }],
      output: '<Modal>\n  <ModalTitle>\n  {<Blah />}\n</ModalTitle>\n</Modal>',
    },
  ],
})
