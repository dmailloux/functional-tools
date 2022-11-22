import { isGreaterThan } from "../../src/numberMethods/isGreaterThan";

describe("given isGreaterThan(y)(x)", () => {
  it("returns true if x > y", () => {
    expect(isGreaterThan(2)(3)).toBe(true);
  });
  it("returns false if x < y", () => {
    expect(isGreaterThan(3)(2)).toBe(false);
  });
  it("returns false if x === y", () => {
    expect(isGreaterThan(3)(3)).toBe(false);
  });
});
