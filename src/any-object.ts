/**
 * Return error-free and type-safe shallow object
 */
export function anyObject<T>(): T {
  return {} as unknown as T;
}
