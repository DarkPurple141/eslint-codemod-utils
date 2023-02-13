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

// ruleTester.run('jsx/basic', rule, {
//   valid: ['<Modal />', '<Other />', '<Modal><ModalTitle /></Modal>'],
//   invalid: [
//     {
//       code: '<Modal title="blah" />',
//       errors: ['error'],
//       output: '<Modal>\n  <ModalTitle>\n  blah\n</ModalTitle>\n</Modal>',
//     },
//     {
//       code: '<Modal title={blah} />',
//       errors: ['error'],
//       output: '<Modal>\n  <ModalTitle>\n  {blah}\n</ModalTitle>\n</Modal>',
//     },
//     {
//       code: '<Modal title={<Blah />} />',
//       errors: ['error'],
//       output: '<Modal>\n  <ModalTitle>\n  {<Blah />}\n</ModalTitle>\n</Modal>',
//     },
//   ],
// })

ruleTester.run('jsx/ecu', ecuRule, {
  valid: ['<Modal />', '<Other />', '<Modal><ModalTitle /></Modal>'],
  invalid: [
    {
      code: '<Modal title="blah" />',
      errors: ['error'],
      output: '<Modal>\n  <ModalTitle>\n  blah\n</ModalTitle>\n</Modal>',
    },
    {
      code: '<Modal title={blah} />',
      errors: ['error'],
      output: '<Modal>\n  <ModalTitle>\n  {blah}\n</ModalTitle>\n</Modal>',
    },
    {
      code: '<Modal title={<Blah />} />',
      errors: ['error'],
      output: '<Modal>\n  <ModalTitle>\n  {<Blah />}\n</ModalTitle>\n</Modal>',
    },
  ],
})
