import type { PartialDeep } from "type-fest";

/**
 * Return error-free and type-safe deep nested object
 */
export function anyNestedObject<T extends object>(
  extended?: PartialDeep<T>
): T {
  const proxy = new Proxy(
    { ...extended },
    {
      get(_, prop) {
        if (extended === undefined) {
          return anyNestedObject();
        }

        // FIXME: want to remove `as any`
        const value = (extended as any)[prop];

        if (value === undefined) {
          return anyNestedObject();
        } else if (typeof value === "object" && value !== null) {
          return anyNestedObject(value);
        } else {
          return value;
        }
      },
    }
  );

  return proxy as unknown as T;
}
