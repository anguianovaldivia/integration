const calc = require('./math');

describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
      expect(calc.add(1, 2)).toBe(3);
    });

    test("subtracting 2 from 10 should return 8", () => {
        expect(calc.subtract(10, 2)).toBe(8);
    });
    
    test("multiplying 2 and 8 should return 16", () => {
        expect(calc.multiply(2, 8)).toBe(16);
    });
    
    test("diviosn 4 and 2 should return 2", () => {
        expect(calc.divide(4, 2)).toBe(2);
    });
})