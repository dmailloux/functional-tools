import { isLessThan } from "../../src/numberMethods/isLessThan";

describe("given isLessThan(y)(x)", () => {
  it("returns true if x < y", () => {
    expect(isLessThan(3)(2)).toBe(true);
  });
  it("returns false if x > y", () => {
    expect(isLessThan(2)(3)).toBe(false);
  });
  it("returns false if x === y", () => {
    expect(isLessThan(3)(3)).toBe(false);
  });
});
