import type { DeepPartial } from "./types/DeepLartial";

/**
 * Return error-free and type-safe deep nested object
 */
export function anyDeepObject<T extends object>(extended?: Partial<T>): T {
  const proxy = new Proxy(extended ?? {}, {
    get(target, prop, receiver) {
      const value = Reflect.get(target, prop, receiver);
      return value ?? anyDeepObject();
    },
  });

  return proxy as unknown as T;
}
