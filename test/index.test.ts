import Util from "../src/index";

describe("index", () => {
  test("zero", () => {
    const zero: number = Util.number.zero();
    expect(zero).toBe(0);
  });
});
