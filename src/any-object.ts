/**
 * Return error-free and type-safe shallow object
 */
export function anyObject<T>(extended?: Partial<T>): T {
  return { ...extended } as unknown as T;
}
