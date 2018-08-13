

export function set1<T extends object, K1 extends keyof T>(
  root: T,
  path: [K1],
  value: T[K1]
): T | undefined {
  return Object.assign({}, root, {[path[0]]: value});
}

export function set2<T extends object, K1 extends keyof T, K2 extends keyof T[K1]>(
  root: T,
  path: [K1, K2],
  value: T[K1][K2]
): T | undefined {
  if (!root[path[0]]) {
    return undefined;
  }

  return Object.assign({}, root, {
    [path[0]]: Object.assign({}, root[path[0]], {[path[1]]: value}),
  });
}

export function set3<
  T extends object,
  K1 extends keyof T,
  K2 extends keyof T[K1],
  K3 extends keyof Exclude<Exclude<T[K1],  undefined | null>[K2], undefined | null>
>(root: T, path: [K1, K2, K3], value: Exclude<Exclude<T[K1],  undefined | null>[K2], undefined | null>[K3]): T | undefined {
  if (!root[path[0]] == null || !root[path[0]][path[1]] == null) {
    return undefined;
  }

  return Object.assign({}, root, {
    [path[0]]: Object.assign({}, root[path[0]], {
      [path[1]]: Object.assign({}, root[path[0]][path[1]], {
        [path[2]]: value,
      }),
    }),
  });
}

