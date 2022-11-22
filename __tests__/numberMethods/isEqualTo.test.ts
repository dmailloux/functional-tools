import { isEqualTo } from "../../src/numberMethods/isEqualTo";

describe("given isEqualTo(y)(x)", () => {
  it("returns false if x < y", () => {
    expect(isEqualTo(3)(2)).toBe(false);
  });
  it("returns false if x > y", () => {
    expect(isEqualTo(2)(3)).toBe(false);
  });
  it("returns true if x === y", () => {
    expect(isEqualTo(3)(3)).toBe(true);
  });
});
