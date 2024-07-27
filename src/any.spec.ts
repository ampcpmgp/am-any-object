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
    expect(actual.func()).toBeUndefined();
    expect(actual.value.func()).toBeUndefined();
  });

  it("should can call array method", () => {
    // Arrange
    type ArrayMethod = {
      array: number[];
    };

    // Act
    const actual = any<ArrayMethod>();

    // Assert
    expect(actual.array.push()).toBeUndefined();
  });
});
