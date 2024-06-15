import { describe, it, expect } from "vitest";
import { anyObject } from "./any-object";

describe("any-object", () => {
  it("should return an object", () => {
    // Arrange

    // Act
    const result = anyObject();

    // Assert
    expect(result).toBeTruthy();
  });
});
