import { describe, it, expect } from "vitest";
import { extendObject } from "./extend-object";

describe("extendObject", () => {
  it("should return an extended object", () => {
    // Arrange
    type User = {
      id: string;
      name: string;
      address: {
        city?: string;
        postalCode: string;
      };
    };
    const base = {
      id: "dummy-id",
      name: "dummy-name",
      address: {
        postalCode: "xxx-xxxx",
      },
    } satisfies User;
    const extended = { address: { city: "new-city" } };

    // Act
    const result = extendObject(base, extended);

    // Type check
    type ResultUser = {
      id: string;
      name: string;
      address: {
        city: string; // not optional
        postalCode: string;
      };
    };
    result satisfies ResultUser;

    // Assert
    expect(result).toEqual({
      id: "dummy-id",
      name: "dummy-name",
      address: {
        city: "new-city",
        postalCode: "xxx-xxxx",
      },
    });
  });
});
