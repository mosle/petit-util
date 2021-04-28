import Util from "../src/index";

describe("index", (): void => {
  test("zero", (): void => {
    const zero: number = Util.number.zero();
    expect(zero).toBe(0);
  });
});
