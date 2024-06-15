import type { PlainData } from "../types/PlainData";

export function fetchPlainData(): Promise<PlainData> {
  return fetch("https://example.com").then((response) => response.json());
}
