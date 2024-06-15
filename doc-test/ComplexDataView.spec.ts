import { describe, it, expect, vi } from "vitest";
import { ComplexDataView } from "./ComplexDataView";
import { fetchComplicatedData } from "./api/fetchComplicatedData";

vi.mock("./api/fetchComplicatedData", () => ({
  fetchComplicatedData: vi.fn(),
}));

describe("ComplexDataView", () => {
  it("should set firstFriend is truthy when friends is not empty", async () => {
    // Arrange
    vi.mocked(fetchComplicatedData).mockResolvedValue({
      id: "",
      name: "",
      address: {
        country: "",
        city: "",
        postalCode: undefined,
      },
      friends: [{ id: "dummy-id-1", name: "Taro" }],
    });

    // Act
    const { firstFriend } = await ComplexDataView();

    // Assert
    expect(firstFriend).toBeTruthy();
  });
});
