import { RuleTester } from 'eslint'

import rule from '../rename-prop'

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
})

ruleTester.run('test-rule', rule, {
  valid: [
    {
      code: '<Hello />',
    },
  ],
  invalid: [
    {
      code: `
<Hello>
  <AKModal open={false} />
</Hello>
`,
      errors: ['error'],
      output: `
<Hello>
  <AKModal isOpen={false} />
</Hello>
`,
    },
    {
      code: `
<AKModal open={false} />`,
      errors: ['error'],
      output: `
<AKModal isOpen={false} />`,
    },
  ],
})
