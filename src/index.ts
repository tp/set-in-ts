export function setIn1<T extends object, K1 extends keyof T>(root: T, path: [K1], value: T[K1]): T | undefined {
  return Object.assign({}, root, { [path[0]]: value });
}

export function setIn2<T extends object, K1 extends keyof T, K2 extends keyof Exclude<T[K1], undefined | null>>(
  root: T,
  path: [K1, K2],
  value: Exclude<T[K1], undefined | null>[K2],
): T | undefined {
  if (root[path[0]] == null) {
    return undefined;
  }

  return Object.assign({}, root, {
    [path[0]]: Object.assign({}, root[path[0]], { [path[1]]: value }),
  });
}

export function setIn3<
  T extends object,
  K1 extends keyof T,
  K2 extends keyof Exclude<T[K1], undefined | null>,
  K3 extends keyof Exclude<Exclude<T[K1], undefined | null>[K2], undefined | null>
>(
  root: T,
  path: [K1, K2, K3],
  value: Exclude<Exclude<T[K1], undefined | null>[K2], undefined | null>[K3],
): T | undefined {
  if (root[path[0]] == null || root[path[0]][(path[1] as any) as keyof T[K1]] == null) {
    return undefined;
  }

  return Object.assign({}, root, {
    [path[0]]: Object.assign({}, root[path[0]], {
      [path[1]]: Object.assign({}, root[path[0]][(path[1] as any) as keyof T[K1]], {
        [path[2]]: value,
      }),
    }),
  });
}

export function setIn<T extends object, K1 extends keyof T>(root: T, path: [K1], value: T[K1]): T | undefined;
export function setIn<T extends object, K1 extends keyof T, K2 extends keyof Exclude<T[K1], undefined | null>>(
  root: T,
  path: [K1, K2],
  value: Exclude<T[K1], undefined | null>[K2],
): T | undefined;
export function setIn<
  T extends object,
  K1 extends keyof T,
  K2 extends keyof Exclude<T[K1], undefined | null>,
  K3 extends keyof Exclude<Exclude<T[K1], undefined | null>[K2], undefined | null>
>(
  root: T,
  path: [K1, K2, K3],
  value: Exclude<Exclude<T[K1], undefined | null>[K2], undefined | null>[K3],
): T | undefined;
export function setIn<
  T extends object,
  K1 extends keyof T,
  K2 extends keyof T[K1],
  K3 extends keyof Exclude<Exclude<T[K1], undefined | null>[K2], undefined | null>
>(
  root: T,
  path: [K1, K2, K3] | [K1, K2] | [K1],
  value: Exclude<Exclude<T[K1], undefined | null>[K2], undefined | null>[K3] &
    Exclude<T[K1], undefined | null>[K2] &
    T[K1],
): T | undefined {
  switch (path.length) {
    case 3:
      return setIn3(root, path, value);
    case 2:
      return setIn2(root, path, value);
    case 1:
      return setIn1(root, path, value);
  }
}
