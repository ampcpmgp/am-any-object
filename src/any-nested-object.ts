import type { PartialDeep } from "type-fest";

/**
 * Return error-free and type-safe deep nested object
 */
export function anyNestedObject<T extends Record<string, unknown>>(
  extended?: PartialDeep<T>
): T {
  const proxy = new Proxy(
    { ...extended },
    {
      get(target, prop) {
        const targetValue = typeof prop === "string" ? target[prop] : undefined;

        if (targetValue === undefined) {
          return anyNestedObject();
        } else if (typeof targetValue === "object" && targetValue !== null) {
          return anyNestedObject(targetValue);
        } else {
          return targetValue;
        }
      },
    }
  );

  return proxy as unknown as T;
}
