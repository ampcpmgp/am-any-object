/**
 * Return error-free and type-safe shallow object
 */
export function anyFlatObject<T>(): T {
  return {} as unknown as T;
}
