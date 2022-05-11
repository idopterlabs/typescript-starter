import { calculation } from "../src/index";

describe("Calculation.add()", () => {
  it("should add two numbers", async () => {
    expect(calculation.add(1, 2)).toBe(3);
  });
});
