import { merge } from "ts-deepmerge";

export function extendObject<T extends object, U extends object>(
  base: T,
  extended: U
) {
  const merged = merge(base, extended);

  return merged;
}
