import { describe, it, expect } from "vitest";
import { any } from "./any";

describe("any", () => {
  it("should return callable property", () => {
    // Arrange
    type Callable = {
      func: () => void;
      value: {
        func: () => void;
      };
    };

    // Act
    const actual = any<Callable>();

    // Assert
    expect(typeof actual).toBe("function");
    expect(actual.func()).toBe(undefined);
    expect(actual.value.func()).toBe(undefined);
  });

  it("should can call array method", () => {
    // Arrange
    type ArrayMethod = {
      array: number[];
    };

    // Act
    const actual = any<ArrayMethod>();

    // Assert
    expect(actual.array.push()).toBe(undefined);
  });
});
