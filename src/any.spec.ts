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

  it("should get every data when passed object", () => {
    // Arrange
    type Data = {
      data: number;
      array: number[];
      object: { data: number };
      func: () => number;
      ANY_PROPERTY: any;
    };

    // Act
    const actual = any<Data>({
      data: 1,
      array: [1],
      object: { data: 1 },
      func: () => 1,
    });

    // Assert
    expect(actual.data).toBe(1);
    expect(actual.array[0]).toBe(1);
    expect(actual.object.data).toBe(1);
    expect(actual.func()).toBe(1);
    expect(typeof actual.array[1]).toBe("function");
    expect(typeof actual.ANY_PROPERTY).toBe("function");
  });
});
