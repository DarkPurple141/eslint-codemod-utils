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
  case 'x': false; '';
}
const v1 = 1 + 4 + 2
let a = 1
;
[]
const yy = {
  a: 1,
  get z() {

},
  init() {

},
  blob() {

},
  b() {

}
}
for (let i = 0;;i++) {
continue
}
const y = <Modal isOpen={true} onClick={onClick}>
  hello
</Modal>
ReactDOM.render(<App />, document.getElementById('root'))
export { b as y }from './other'
export default b
export const yyy = 10
export * from 's'`
    )
  })
})
