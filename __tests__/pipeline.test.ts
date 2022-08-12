import { pipeline } from "../src/pipeline";

describe("on strings", () => {
  const capitalize = (x: string) => x.toUpperCase();
  const append = (y: string) => (x: string) => x + y;

  it("handles 1 argument functions", () => {
    expect(pipeline("bobby", capitalize)).toBe("BOBBY");
  });

  it("handles curried functions", () => {
    expect(pipeline("bobby", append("'s world"))).toBe("bobby's world");
  });

  it("handles mixing 1 argument and curried functions", () => {
    expect(pipeline("bobby", append("'s world"), capitalize)).toBe("BOBBY'S WORLD");
  });

  it("runs operations in sequence", () => {
    expect(
      pipeline(
        "bobby",
        (x) => x + "!",
        (x) => x + "?",
      ),
    ).toBe("bobby!?");
  });
});

describe("on numbers", () => {
  const abs = (x: number) => (x < 0 ? x * -1 : x);
  const add = (y: number) => (x: number) => x + y;

  it("handles 1 argument functions", () => {
    expect(pipeline(-5, abs)).toBe(5);
  });

  it("handles curried functions", () => {
    expect(pipeline(-5, add(-5))).toBe(-10);
  });

  it("handles mixing 1 argument and curried functions", () => {
    expect(pipeline(-5, abs, add(-5))).toBe(0);
  });

  it("runs operations in sequence", () => {
    expect(
      pipeline(
        5,
        (x) => x + 2,
        (x) => x * -1,
      ),
    ).toBe(-7);
  });
});
