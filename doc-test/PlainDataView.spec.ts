import { describe, it, expect, vi } from "vitest";
import { PlainDataView } from "./PlainDataView";
import { fetchPlainData } from "./api/fetchPlainData";
import { anyPlainObject } from "../src/index";

vi.mock("./api/fetchPlainData", () => ({
  fetchPlainData: vi.fn(),
}));

describe("PlainDataView", () => {
  it("should set name to 'Taro Yamada' when firstName is Taro and lastName is Yamada (not use am-any-object)", async () => {
    // Arrange
    vi.mocked(fetchPlainData).mockResolvedValue({
      id: "",
      age: 0,
      firstName: "Taro",
      lastName: "Yamada",
      country: "",
      city: "",
    });

    // Act
    const { name } = await PlainDataView();

    // Assert
    expect(name).toBe("Taro Yamada");
  });

  it("should set name to 'Taro Yamada' when firstName is Taro and lastName is Yamada (use am-any-object)", async () => {
    // Arrange
    vi.mocked(fetchPlainData).mockResolvedValue({
      ...anyPlainObject(),

      firstName: "Taro",
      lastName: "Yamada",
    });

    // Act
    const { name } = await PlainDataView();

    // Assert
    expect(name).toBe("Taro Yamada");
  });

  it("should set name to 'Taro Yamada' when firstName is Taro and lastName is Yamada (type unsafe)", async () => {
    // Arrange
    vi.mocked(fetchPlainData).mockResolvedValue({
      firstName: "Taro",
      lastName: "Yamada",
      lastName2: "Yamada",
    } as any);

    // Act
    const { name } = await PlainDataView();

    // Assert
    expect(name).toBe("Taro Yamada");
  });

  it("should set name to 'Taro Yamada' when firstName is Taro and lastName is Yamada (type unsafe)", async () => {
    // Arrange
    vi.mocked(fetchPlainData).mockResolvedValue({
      ...({} as any),
      firstName: "Taro",
      lastName: "Yamada",
      lastName2: "Yamada",
    });

    // Act
    const { name } = await PlainDataView();

    // Assert
    expect(name).toBe("Taro Yamada");
  });
});
