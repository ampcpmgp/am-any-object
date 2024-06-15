import type { FlatData } from "../types/FlatData";

export function fetchFlatData(): Promise<FlatData> {
  return fetch("https://example.com").then((response) => response.json());
}
