/**
 * 型エラーを補完する object を返却する
 */
export function anyObject<T>(): T {
  return {} as unknown as T;
}

/**
 * 型エラーを補完する object を返却する
 *
 * nest されていても再帰的に object を返却する。
 */
export function anyObject<T>(extended?: object): T {
  const proxy = new Proxy(extended ?? {}, {
    get(target, prop, receiver) {
      console.log('🚀 ');
      console.log('🚀 extended', extended);
      console.log('🚀 target', target);
      console.log('🚀 prop', prop);
      console.log('🚀 receiver', receiver);
      return {};
    },
  });

  return proxy as unknown as T;
}
