import type { NestedData } from "../types/NestedData";

export function fetchNestedData(): Promise<NestedData> {
  return fetch("https://example.com").then((response) => response.json());
}
