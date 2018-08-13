# set-in-ts

```ts
var {set1, set2, set3} = require("set-in-ts")

set3({x: { y: { z: 'a' } } }, ['x', 'y', 'z'], 'b') // === {x: { y: { z: 'b' } } }
```