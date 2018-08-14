import { setIn1, setIn2, setIn3, setIn } from '..';

test('set1 test', async () => {
  expect(setIn1({ x: 1 }, ['x'], 2)).toEqual({ x: 2 });
});

test('set2 test', async () => {
  expect(setIn2({ x: { y: 2 } }, ['x', 'y'], 1)).toEqual({ x: { y: 1 } });
});

test('set3 test', async () => {
  expect(setIn3({ x: { y: { z: 'a' } } }, ['x', 'y', 'z'], 'b')).toEqual({ x: { y: { z: 'b' } } });
});

test('set overload test', async () => {
  expect(setIn({ x: 1 }, ['x'], 2)).toEqual({ x: 2 });
  expect(setIn({ x: { y: 2 } }, ['x', 'y'], 1)).toEqual({ x: { y: 1 } });
  expect(setIn({ x: { y: { z: 'a' } } }, ['x', 'y', 'z'], 'b')).toEqual({ x: { y: { z: 'b' } } });

  type Nested = { x?: { y?: { z?: 5 } } };

  expect(setIn({ x: undefined } as Nested, ['x'], { y: { z: 5 } })).toEqual({ x: { y: { z: 5 } } });

  expect(setIn2({ x: undefined } as Nested, ['x', 'y'], { z: 5 })).toEqual(undefined);
  expect(setIn({ x: undefined } as Nested, ['x', 'y'], { z: 5 })).toEqual(undefined);

  expect(setIn3({ x: { y: { z: undefined } } } as Nested, ['x', 'y', 'z'], 5)).toEqual({ x: { y: { z: 5 } } });
  expect(setIn({ x: { y: { z: undefined } } } as Nested, ['x', 'y'], { z: 5 })).toEqual({ x: { y: { z: 5 } } });

  expect(setIn3({ x: { y: undefined } } as Nested, ['x', 'y', 'z'], 5)).toEqual(undefined);
  expect(setIn({ x: { y: undefined } } as Nested, ['x', 'y', 'z'], 5)).toEqual(undefined);
});
