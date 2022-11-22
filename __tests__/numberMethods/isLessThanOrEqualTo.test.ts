import { isLessThanOrEqualTo } from "../../src/numberMethods/isLessThanOrEqualTo";

describe("given isLessThanOrEqualTo(y)(x)", () => {
  it("returns true if x < y", () => {
    expect(isLessThanOrEqualTo(3)(2)).toBe(true);
  });
  it("returns false if x > y", () => {
    expect(isLessThanOrEqualTo(2)(3)).toBe(false);
  });
  it("returns true if x === y", () => {
    expect(isLessThanOrEqualTo(3)(3)).toBe(true);
  });
});
