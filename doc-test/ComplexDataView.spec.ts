import { describe, it, expect, vi } from "vitest";
import { ComplexDataView } from "./ComplexDataView";
import { fetchComplexData } from "./api/fetchComplexData";
import { anyDeepObject, anyPlainObject } from "../src/index";
import type { ComplexData, ComplexFriendData } from "./types/ComplexData";

vi.mock("./api/fetchComplicatedData", () => ({
  fetchComplicatedData: vi.fn(),
}));

describe("ComplexDataView", () => {
  // // Normal test (not use am-any-object)
  // it("should set hasPostalCode to true when address.postalCode is defined", async () => {
  //   // Arrange
  //   vi.mocked(fetchComplicatedData).mockResolvedValue({
  //     id: "",
  //     firstName: "",
  //     lastName: "",
  //     address: {
  //       country: "",
  //       city: "",
  //       postalCode: "123-4567",
  //     },
  //     friends: [],
  //   });
  //   // Act
  //   const { hasPostalCode } = await ComplexDataView();
  //   // Assert
  //   expect(hasPostalCode).toBe(true);
  // });
  // // Library test (use am-any-object)
  // it("should set hasPostalCode to true when address.postalCode is defined", async () => {
  //   // Arrange
  //   vi.mocked(fetchComplicatedData).mockResolvedValue({ ...anyObject() });
  //   // Act
  //   const { hasPostalCode } = await ComplexDataView();
  //   // Assert
  //   expect(hasPostalCode).toBe(true);
  // });
  // // Normal test (not use am-any-object)
  // it("should set secondFriendName to James when friends[1].name is James", async () => {
  //   // Arrange
  //   vi.mocked(fetchComplicatedData).mockResolvedValue({
  //     id: "",
  //     firstName: "",
  //     lastName: "",
  //     address: {
  //       country: "",
  //       city: "",
  //       postalCode: undefined,
  //     },
  //     friends: [
  //       { id: "dummy-id-1", name: "Taro" },
  //       { id: "dummy-id-2", name: "James" },
  //     ],
  //   });
  //   // Act
  //   const { secondFriendName } = await ComplexDataView();
  //   // Assert
  //   expect(secondFriendName).toBe("James");
  // });
  // // Library test (use am-any-object)
  // it("should set firstFriend is truthy when friends is not empty", async () => {
  //   // Arrange
  //   vi.mocked(fetchComplicatedData).mockResolvedValue(
  //     anyDeepObject<ComplexData>({
  //       friends: [anyDeepObject(), anyDeepObject<Friend>({ name: "James" })],
  //     })
  //   );
  //   // Act
  //   const { secondFriendName } = await ComplexDataView();
  //   // Assert
  //   expect(secondFriendName).toBe("James");
  // });
});
