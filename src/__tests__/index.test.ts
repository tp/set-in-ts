import { set1, set2, set3 } from "..";


test('set1 test', async () => {
    expect(set1({x: 1}, ['x'], 2)).toEqual({x: 2});
});

test('set2 test', async () => {
    expect(set2({x: { y: 2 } }, ['x', 'y'], 1)).toEqual({x: { y: 1 } });
});

test('set3 test', async () => {
    expect(set3({x: { y: { z: 'a' } } }, ['x', 'y', 'z'], 'b')).toEqual({x: { y: { z: 'b' } } });
});