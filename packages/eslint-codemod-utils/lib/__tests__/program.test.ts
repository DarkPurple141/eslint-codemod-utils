import { program } from '..'

import programFixture from './__fixtures__/program'

describe('program', () => {
  test('basic', () => {
    expect(String(program(programFixture as any))).eq(
      `import A, { Welcome } from '@atlaskit/welcome'
function XXXXXX () {}
new X
X()
let z,zz,zzz
const x = class __Unimplemented {}
class __Unimplemented {}
switch (e) {
  case 'x': false;
}
;
[]
const yy = {}
const y = <Modal isOpen={true} onClick={onClick}>
  hello
</Modal>
ReactDOM.render(<App />, document.getElementById('root'))`
    )
  })
})
