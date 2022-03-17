import { program } from '..'

import programFixture from './__fixtures__/program'

describe('program', () => {
  test('basic', () => {
    expect(String(program(programFixture as any))).eq(
      `import A, { Welcome } from '@atlaskit/welcome'
function XXXXXX () {}
new X
X()
const x = class __Unimplemented {}
class __Unimplemented {}
switch (unimplemented) {
    case 'TO': 'DO';
  }
const y = <Modal isOpen={true} onClick={onClick}>
  hello
</[object Object]> 
ReactDOM.render(<App />, document.getElementById('root'))`
    )
  })
})
