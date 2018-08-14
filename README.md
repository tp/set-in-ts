# set-in-ts

[![Build Status](https://travis-ci.org/tp/set-in-ts.svg?branch=master)](https://travis-ci.org/tp/set-in-ts)

Type-safe `setIn` implementation to write nested fields. Returns `undefined` if `undefined` or `null` is encountered when traversing path.

```ts
import { setIn } from 'set-in-ts';

setIn({ x: { y: { z: 1 } } }, ['x', 'y', 'z'], 2); // === {x: { y: { z: 2 } } }
```
