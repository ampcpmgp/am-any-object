import type { DeepPartial } from "./types/DeepLartial";

/**
 * Return error-free and type-safe object
 */
export function anyObject<T extends object>(extended?: DeepPartial<T>): T {
  const proxy = new Proxy(extended ?? {}, {
    get(target, prop, receiver) {
      console.log("🚀 ");
      console.log("🚀 extended", extended);
      console.log("🚀 target", target);
      console.log("🚀 prop", prop);
      console.log("🚀 receiver", receiver);
      return anyObject();
    },
  });

  return proxy as unknown as T;
}
