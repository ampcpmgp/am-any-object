import type { ComplexData } from "../types/ComplexData";

export function fetchComplicatedData(): Promise<ComplexData> {
  return fetch("https://example.com").then((response) => response.json());
}
