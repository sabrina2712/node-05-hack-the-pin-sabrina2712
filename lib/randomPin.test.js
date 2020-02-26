const { newPin, pinifyNumber } = require("./randomPin");

describe("Pinify Number", () => {
  test("Should return 0000 as string if no number provided and 4 digits expected", () => {
    expect(pinifyNumber("", 4)).toBe("0000");
  });

  test("Should return 0001 as string if number: 1 and digits:4 is expected", () => {
    expect(pinifyNumber(1, 4)).toBe("0001");
  });

  test("Should not modify number if already satisfying digit count", () => {
    expect(pinifyNumber(4020, 4)).toBe("4020");
  });
});

describe("Random Pin test", () => {
  test("is a function", () => {
    expect(typeof newPin).toBe("function");
  });
  test("returns a number", () => {
    expect(typeof newPin()).toBe("string");
  });
  test("should be > 0 && < 4", () => {
    const pin = newPin(4);
    const bigger0 = pin >= 0;
    const smaller4 = pin <= 4;

    expect(bigger0 && smaller4).toBeTruthy();
  });
});
