const { add, subtract, multiply, divide, modulo, exponent, sqrt, calculate } = require('../calculator');

// ─── Addition ────────────────────────────────────────────────────────────────
describe('add()', () => {
  test('adds two positive numbers (2 + 3 = 5)', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds two large numbers (45 + 55 = 100)', () => {
    expect(add(45, 55)).toBe(100);
  });

  test('adds a positive and a negative number (10 + -4 = 6)', () => {
    expect(add(10, -4)).toBe(6);
  });

  test('adds two negative numbers (-3 + -7 = -10)', () => {
    expect(add(-3, -7)).toBe(-10);
  });

  test('adds with zero (5 + 0 = 5)', () => {
    expect(add(5, 0)).toBe(5);
  });

  test('adds floating point numbers (0.1 + 0.2 ≈ 0.3)', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

// ─── Subtraction ─────────────────────────────────────────────────────────────
describe('subtract()', () => {
  test('subtracts two positive numbers (10 - 4 = 6)', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracts resulting in a negative number (3 - 9 = -6)', () => {
    expect(subtract(3, 9)).toBe(-6);
  });

  test('subtracts zero (7 - 0 = 7)', () => {
    expect(subtract(7, 0)).toBe(7);
  });

  test('subtracts two equal numbers (5 - 5 = 0)', () => {
    expect(subtract(5, 5)).toBe(0);
  });

  test('subtracts two negative numbers (-3 - -2 = -1)', () => {
    expect(subtract(-3, -2)).toBe(-1);
  });

  test('subtracts floating point numbers (1.5 - 0.5 = 1)', () => {
    expect(subtract(1.5, 0.5)).toBeCloseTo(1);
  });
});

// ─── Multiplication ──────────────────────────────────────────────────────────
describe('multiply()', () => {
  test('multiplies two positive numbers (45 * 2 = 90)', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplies by zero (6 * 0 = 0)', () => {
    expect(multiply(6, 0)).toBe(0);
  });

  test('multiplies by one (7 * 1 = 7)', () => {
    expect(multiply(7, 1)).toBe(7);
  });

  test('multiplies two negative numbers (-3 * -4 = 12)', () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  test('multiplies a positive and a negative number (5 * -3 = -15)', () => {
    expect(multiply(5, -3)).toBe(-15);
  });

  test('multiplies floating point numbers (2.5 * 4 = 10)', () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10);
  });
});

// ─── Division ────────────────────────────────────────────────────────────────
describe('divide()', () => {
  test('divides two positive numbers (20 / 5 = 4)', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('divides with a decimal result (10 / 4 = 2.5)', () => {
    expect(divide(10, 4)).toBeCloseTo(2.5);
  });

  test('divides by one (9 / 1 = 9)', () => {
    expect(divide(9, 1)).toBe(9);
  });

  test('divides a number by itself (7 / 7 = 1)', () => {
    expect(divide(7, 7)).toBe(1);
  });

  test('divides negative numbers (-12 / 3 = -4)', () => {
    expect(divide(-12, 3)).toBe(-4);
  });

  // Edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
  });

  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero is not allowed');
  });
});

// ─── calculate() integration ─────────────────────────────────────────────────
describe('calculate()', () => {
  test('evaluates addition expression "2 + 3"', () => {
    expect(calculate('2 + 3')).toBe(5);
  });

  test('evaluates subtraction expression "10 - 4"', () => {
    expect(calculate('10 - 4')).toBe(6);
  });

  test('evaluates multiplication expression "45 * 2"', () => {
    expect(calculate('45 * 2')).toBe(90);
  });

  test('evaluates division expression "20 / 5"', () => {
    expect(calculate('20 / 5')).toBe(4);
  });

  test('evaluates modulo expression "10 % 3"', () => {
    expect(calculate('10 % 3')).toBe(1);
  });

  test('evaluates exponentiation (power) expression "2 ** 8"', () => {
    expect(calculate('2 ** 8')).toBe(256);
  });

  test('evaluates square root expression "sqrt 16"', () => {
    expect(calculate('sqrt 16')).toBe(4);
  });

  test('throws on division by zero in expression "8 / 0"', () => {
    expect(() => calculate('8 / 0')).toThrow('Division by zero is not allowed');
  });

  test('throws on modulo by zero in expression "8 % 0"', () => {
    expect(() => calculate('8 % 0')).toThrow('Division by zero is not allowed');
  });

  test('throws on square root of negative number "sqrt -4"', () => {
    expect(() => calculate('sqrt -4')).toThrow('Square root of a negative number is not allowed');
  });

  test('throws on unknown operator', () => {
    expect(() => calculate('5 ^ 2')).toThrow('Unknown operator');
  });

  test('throws on invalid expression (too few parts)', () => {
    expect(() => calculate('5 +')).toThrow('Invalid expression');
  });

  test('throws when operands are not numbers', () => {
    expect(() => calculate('a + b')).toThrow('Both operands must be valid numbers');
  });
});

// ─── Modulo ──────────────────────────────────────────────────────────────────
describe('modulo', () => {
  test('returns modulo remainder (10 % 3 = 1)', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('returns zero when evenly divisible (9 % 3 = 0)', () => {
    expect(modulo(9, 3)).toBe(0);
  });

  test('returns correct modulo for negative dividend (-10 % 3 = -1)', () => {
    expect(modulo(-10, 3)).toBe(-1);
  });

  test('returns correct modulo for floating point numbers (5.5 % 2 = 1.5)', () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });

  // Edge case: modulo by zero
  test('throws an error when modulo divisor is zero', () => {
    expect(() => modulo(10, 0)).toThrow('Division by zero is not allowed');
  });
});

// ─── Exponentiation (Power) ──────────────────────────────────────────────────
describe('power', () => {
  test('raises a number to a positive power (2 ** 8 = 256)', () => {
    expect(exponent(2, 8)).toBe(256);
  });

  test('raises a number to the power of zero (5 ** 0 = 1)', () => {
    expect(exponent(5, 0)).toBe(1);
  });

  test('raises a number to the power of one (7 ** 1 = 7)', () => {
    expect(exponent(7, 1)).toBe(7);
  });

  test('raises a number to a negative power (2 ** -2 = 0.25)', () => {
    expect(exponent(2, -2)).toBeCloseTo(0.25);
  });

  test('raises a negative base to an even power (-3 ** 2 = 9)', () => {
    expect(exponent(-3, 2)).toBe(9);
  });

  test('raises a negative base to an odd power (-2 ** 3 = -8)', () => {
    expect(exponent(-2, 3)).toBe(-8);
  });
});

// ─── Square Root ─────────────────────────────────────────────────────────────
describe('squareroot', () => {
  test('returns the square root of a perfect square (sqrt 16 = 4)', () => {
    expect(sqrt(16)).toBe(4);
  });

  test('returns the square root of 0 (sqrt 0 = 0)', () => {
    expect(sqrt(0)).toBe(0);
  });

  test('returns the square root of 1 (sqrt 1 = 1)', () => {
    expect(sqrt(1)).toBe(1);
  });

  test('returns the square root of a non-perfect square (sqrt 2 ≈ 1.414)', () => {
    expect(sqrt(2)).toBeCloseTo(1.414, 3);
  });

  test('returns the square root of a large number (sqrt 100 = 10)', () => {
    expect(sqrt(100)).toBe(10);
  });

  // Edge case: negative input
  test('throws an error when taking square root of a negative number', () => {
    expect(() => sqrt(-4)).toThrow('Square root of a negative number is not allowed');
  });
});
