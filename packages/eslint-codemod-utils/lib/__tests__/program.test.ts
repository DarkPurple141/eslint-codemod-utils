import { program } from '..'

import programFixture from '../__fixtures__/program'

describe('program', () => {
  test('basic', () => {
    // @ts-expect-error This is fine it's just JSON
    expect(String(program(programFixture))).eq(
      `import A, { Welcome } from '@atlaskit/welcome'
import { X } from './other'
import tmm, * as x from 'thing'
import 'blah'
const someImport = import('hello.js')
const someStatement = probably.blob
function App({a: a}, {b: c}) {
  return (
  <div>
      
      
      <Welcome name="Sara" otherName={2} isBlanketHidden {...x()} />
      
      
      <Welcome name="Cahal" />
      
      
      <Welcome name="Edite" />
      
    
    </div>
  );
}
const silly = (1, 3)
new X(\`\${hello}: "world" \${1 == 2 ? \`\${Welcome}\` : ''}\`)
X()
let z,zz,zzz
const p = class Z {}
class D extends B {
  constructor () {
  super()
  this.hello='hi'
}
  other () {
  return this.hello;
}
}
switch (e) {
  case 'x': false; '';
  default: 'zz';
}
const v1 = 1 + 4 + 2
{
  let a = 1
}
;
[]
if (1 < 3) {} else if (1 == 0) {
  console.log('success')
} else {
  console.log('error')
}
const yy = {
  a: 1,
  get z() {},
  set j(j) {},
  init: function () {},
  blob: async function () {},
  b: function () {},
  c: function d() {},
  pp: function () {},
  zz: async function () {}
}
for (let i = 0;;i++) {
  continue
}
try {
  throw new Error('bad thing');
} catch {} finally {
  console.log('cleanup')
}
while (i < 0) {
  break
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
