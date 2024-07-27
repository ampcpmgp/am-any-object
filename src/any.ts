import type { PartialDeep } from "type-fest";

/**
 * Return error-free and type-safe deep nested object
 */
export function any<T extends object>(extended?: PartialDeep<T>): T {
  const func = () => void 0;
  Object.assign(func, extended);

  const proxy = new Proxy(func, {
    get(_, prop) {
      if (extended === undefined) {
        return any();
      }

      // FIXME: want to remove `as any`
      const value = (extended as any)[prop];

      if (value === undefined) {
        return any();
      } else if (typeof value === "object" && value !== null) {
        return any(value);
      } else {
        return value;
      }
    },
  });

  return proxy as unknown as T;
}
