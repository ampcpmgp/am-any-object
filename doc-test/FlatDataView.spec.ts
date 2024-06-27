import { describe, it, expect, vi } from "vitest";
import { FlatDataView } from "./FlatDataView";
import { fetchFlatData } from "./api/fetchFlatData";
import { anyObject } from "../src/index";

vi.mock("./api/fetchFlatData", () => ({
  fetchFlatData: vi.fn(),
}));

describe("FlatDataView", () => {
  it("should set name to 'Taro Yamada' when firstName is Taro and lastName is Yamada (not use am-any-object)", async () => {
    // Arrange
    vi.mocked(fetchFlatData).mockResolvedValue({
      id: "",
      age: 0,
      firstName: "Taro",
      lastName: "Yamada",
      country: "",
      city: "",
    });

    // Act
    const { name } = await FlatDataView();

    // Assert
    expect(name).toBe("Taro Yamada");
  });

  it("should set name to 'Taro Yamada' when firstName is Taro and lastName is Yamada (use anyObject)", async () => {
    // Arrange
    vi.mocked(fetchFlatData).mockResolvedValue({
      ...anyObject(),

      firstName: "Taro",
      lastName: "Yamada",
    });

    // Act
    const { name } = await FlatDataView();

    // Assert
    expect(name).toBe("Taro Yamada");
  });

  it("should set name to 'Taro Yamada' when firstName is Taro and lastName is Yamada (type unsafe)", async () => {
    // Arrange
    vi.mocked(fetchFlatData).mockResolvedValue({
      firstName: "Taro",
      lastName: "Yamada",
      lastName2: "Yamada",
    } as any);

    // Act
    const { name } = await FlatDataView();

    // Assert
    expect(name).toBe("Taro Yamada");
  });

  it("should set name to 'Taro Yamada' when firstName is Taro and lastName is Yamada (type unsafe)", async () => {
    // Arrange
    vi.mocked(fetchFlatData).mockResolvedValue({
      ...({} as any),
      firstName: "Taro",
      lastName: "Yamada",
      lastName2: "Yamada",
    });

    // Act
    const { name } = await FlatDataView();

    // Assert
    expect(name).toBe("Taro Yamada");
  });
});
