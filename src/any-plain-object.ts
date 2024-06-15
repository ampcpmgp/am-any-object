/**
 * Return error-free and type-safe shallow object
 */
export function anyPlainObject<T>(): T {
  return {} as unknown as T;
}
