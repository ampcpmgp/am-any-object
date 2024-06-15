import { describe, it, expect, vi } from "vitest";
import { NestedDataView } from "./NestedDataView";
import { fetchNestedData } from "./api/fetchNestedData";
import { anyNestedObject, anyFlatObject } from "../src/index";
import type { NestedData } from "./types/NestedData";

vi.mock("./api/fetchNestedData", () => ({
  fetchNestedData: vi.fn(),
}));

describe("NestedDataView", () => {
  it("should set hasPostalCode to true and lat to 0 when address.postalCode is defined", async () => {
    // Arrange
    vi.mocked(fetchNestedData).mockResolvedValue({
      id: "",
      address: {
        postalCode: "100-0000",
        country: "",
        city: "",
        geo: {
          lat: 0,
          lng: 0,
        },
      },
    });

    // Act
    const { hasPostalCode } = await NestedDataView();

    // Assert
    expect(hasPostalCode).toBe(true);
  });

  it("should set hasPostalCode to true when address.postalCode is defined (use anyFlatObject)", async () => {
    // Arrange
    vi.mocked(fetchNestedData).mockResolvedValue({
      ...anyFlatObject(),

      address: {
        ...anyFlatObject(),
        geo: anyFlatObject(),
        postalCode: "100-0000",
      },
    });

    // Act
    const { hasPostalCode } = await NestedDataView();

    // Assert
    expect(hasPostalCode).toBe(true);
  });

  it("should set hasPostalCode to true when address.postalCode is defined (use anyNestedObject)", async () => {
    // Arrange
    vi.mocked(fetchNestedData).mockResolvedValue(
      anyNestedObject<NestedData>({
        address: {
          postalCode: "100-0000",
        },
      })
    );

    // Act
    const { hasPostalCode } = await NestedDataView();

    // Assert
    expect(hasPostalCode).toBe(true);
  });
});
