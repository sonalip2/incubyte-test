const stringCalculator = require("./stringCalculator");

test("adds two numbers correctly", () => {
  const sum = stringCalculator("1,2");
  expect(sum).toBe(3);
});

test("adds numbers correctly with only ,", () => {
  const sum = stringCalculator(",");
  expect(sum).toBe(0);
});

test("adds with having space after comma correctly", () => {
  const sum = stringCalculator("1 , 2, 3");
  expect(sum).toBe(6);
});

test("adds with having space after comma correctly", () => {
  const sum = stringCalculator("1 , 2, 3");
  expect(sum).toBe(6);
});

test("adds with having extra comma at last in string correctly", () => {
  const sum = stringCalculator("1,2,3,");
  expect(sum).toBe(6);
});

test("adds five numbers correctly", () => {
  const sum = stringCalculator("1,10,100,1000,10000");
  expect(sum).toBe(11111);
});

test("should throw error on passing negative number", () => {
  expect(() => stringCalculator("-1,-5")).toThrow(
    "negative numbers not allowed -1,negative numbers not allowed -5"
  );
});

test("should throw error on passing mix of positive and negative number", () => {
  expect(() => stringCalculator("1,-5,3,-2")).toThrow(
    "negative numbers not allowed -5,negative numbers not allowed -2"
  );
});

test("adds numbers with javascript number max value correctly", () => {
  const sum = stringCalculator(`${Number.MAX_VALUE},1,1`);
  expect(sum).toBe(Number.MAX_VALUE);
});

test("adds numbers with javascript having custom delimiter", () => {
  const sum = stringCalculator("//$\n1$2$3");
  expect(sum).toBe(6);
});
