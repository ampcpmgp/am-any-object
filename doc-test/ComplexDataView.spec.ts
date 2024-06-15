import { describe, it, expect, vi } from "vitest";
import { ComplexDataView } from "./ComplexDataView";
import { fetchComplicatedData } from "./api/fetchComplicatedData";
import { anyObject } from "../src/index";
import type { ComplexData, Friend } from "./types/ComplexData";

vi.mock("./api/fetchComplicatedData", () => ({
  fetchComplicatedData: vi.fn(),
}));

describe("ComplexDataView", () => {
  // Normal test (not use am-any-object)
  it("should set secondFriendName to James when friends[1].name is James", async () => {
    // Arrange
    vi.mocked(fetchComplicatedData).mockResolvedValue({
      id: "",
      name: "",
      address: {
        country: "",
        city: "",
        postalCode: undefined,
      },
      friends: [
        { id: "dummy-id-1", name: "Taro" },
        { id: "dummy-id-2", name: "James" },
      ],
    });

    // Act
    const { secondFriendName } = await ComplexDataView();

    // Assert
    expect(secondFriendName).toBe("James");
  });

  // Library test (use am-any-object)
  it("should set firstFriend is truthy when friends is not empty", async () => {
    // Arrange
    vi.mocked(fetchComplicatedData).mockResolvedValue(
      anyObject<ComplexData>({
        friends: [anyObject(), anyObject<Friend>({ name: "James" })],
      })
    );

    // Act
    const { secondFriendName } = await ComplexDataView();

    // Assert
    expect(secondFriendName).toBe("James");
  });
});
