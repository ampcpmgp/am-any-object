import { describe, it, expect } from "vitest";
import { anyNestedObject } from "./any-nested-object";

describe("anyNestedObject", () => {
  it("should return empty object when no argument", () => {
    // Arrange

    // Act
    const actual = anyNestedObject();

    // Assert
    expect(actual).toEqual({});
  });

  it("should return empty object when argument is empty object", () => {
    // Arrange

    // Act
    const actual = anyNestedObject({});

    // Assert
    expect(actual).toEqual({});
  });

  it("should return empty object when access to nested object", () => {
    // Arrange
    type NestedObject = {
      value: {
        name: string;
        count: number;
      };
    };

    // Act
    const actual = anyNestedObject<NestedObject>();

    // Assert
    expect(actual.value).toEqual({});
    expect(actual.value.count).toEqual({});
  });

  it("should set name is {} and count is 5 when passed count is 5", () => {
    // Arrange
    type FlatObject = {
      name: string;
      count: number;
    };

    // Act
    const { count, name } = anyNestedObject<FlatObject>({
      count: 5,
    });

    // Assert
    expect(name).toEqual({});
    expect(count).toBe(5);
  });

  it("should set postalCode is '12345' and other properties are {} when postalCode is '12345'", () => {
    // Arrange
    type NestedObject = {
      name: string;
      address: {
        country: string;
        city: string;
        postalCode?: string;
        geo: {
          lat: number;
          lng: number;
        };
      };
    };

    // Act
    const {
      name,
      address: {
        country,
        postalCode,
        geo,
        geo: { lat },
      },
    } = anyNestedObject<NestedObject>({
      address: {
        postalCode: "12345",
      },
    });

    // Assert
    expect(name).toEqual({});
    expect(country).toEqual({});
    expect(postalCode).toBe("12345");
    expect(geo).toEqual({});
    expect(lat).toEqual({});
  });
});
