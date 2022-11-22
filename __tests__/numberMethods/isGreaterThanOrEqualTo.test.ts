import { isGreaterThanOrEqualTo } from "../../src/numberMethods/isGreaterThanOrEqualTo";

describe("given isGreaterThanOrEqualTo(y)(x)", () => {
  it("returns true if x > y", () => {
    expect(isGreaterThanOrEqualTo(2)(3)).toBe(true);
  });
  it("returns false if x < y", () => {
    expect(isGreaterThanOrEqualTo(3)(2)).toBe(false);
  });
  it("returns true if x === y", () => {
    expect(isGreaterThanOrEqualTo(3)(3)).toBe(true);
  });
});
