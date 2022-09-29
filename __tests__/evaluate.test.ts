import { evaluate } from "../src/evaluate";
import { isGreaterThanOrEqualTo } from "../src/numberMethods/isGreaterThanOrEqualTo";
import { isLessThan } from "../src/numberMethods/isLessThan";

describe("on strings", () => {
  it("return true if every function in the sequence returns true", () => {
    expect(
      evaluate(
        "a",
        (x) => x.length === 1,
        (x) => x[0] === "a",
      ),
    ).toBe(true);
  });

  it("return false if any function in the sequence returns false", () => {
    expect(
      evaluate(
        "a",
        (x) => x.length === 1,
        (x) => x[0] === "b",
      ),
    ).toBe(false);
  });
});

describe("on numbers", () => {
  it("return true if every function in the sequence returns true", () => {
    expect(evaluate(23, isLessThan(24), (x) => x === 23, isGreaterThanOrEqualTo(20))).toBe(true);
  });

  it("return false if any function in the sequence returns false", () => {
    expect(evaluate(23, isLessThan(24), isGreaterThanOrEqualTo(20), (x) => x > 30)).toBe(false);
  });
});
