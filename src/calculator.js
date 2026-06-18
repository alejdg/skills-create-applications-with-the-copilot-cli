#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supports the following four basic arithmetic operations:
 *   - Addition       (+): sum two numbers
 *   - Subtraction    (-): find the difference between two numbers
 *   - Multiplication (*): multiply two numbers together
 *   - Division       (/): divide two numbers (division by zero returns an error)
 */

const readline = require('readline');

module.exports = { add, subtract, multiply, divide, calculate };

/** Returns the sum of a and b */
function add(a, b) {
  return a + b;
}

/** Returns the difference of a minus b */
function subtract(a, b) {
  return a - b;
}

/** Returns the product of a and b */
function multiply(a, b) {
  return a * b;
}

/** Returns the quotient of a divided by b; errors on division by zero */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

/** Evaluates a simple expression: <number> <operator> <number> */
function calculate(expression) {
  const parts = expression.trim().split(/\s+/);
  if (parts.length !== 3) {
    throw new Error('Invalid expression. Use: <number> <+|-|*|/> <number>');
  }

  const a = parseFloat(parts[0]);
  const operator = parts[1];
  const b = parseFloat(parts[2]);

  if (isNaN(a) || isNaN(b)) {
    throw new Error('Both operands must be valid numbers');
  }

  switch (operator) {
    case '+': return add(a, b);
    case '-': return subtract(a, b);
    case '*': return multiply(a, b);
    case '/': return divide(a, b);
    default:
      throw new Error(`Unknown operator "${operator}". Supported: + - * /`);
  }
}

// Only start the interactive CLI when run directly (not when imported by tests)
if (require.main === module) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log('Node.js CLI Calculator');
  console.log('Supported operations: addition (+), subtraction (-), multiplication (*), division (/)');
  console.log('Usage: <number> <operator> <number>  (e.g. 5 + 3)');
  console.log('Type "exit" or press Ctrl+C to quit.\n');

  rl.on('line', (line) => {
    const input = line.trim();
    if (input.toLowerCase() === 'exit') {
      rl.close();
      return;
    }
    try {
      const result = calculate(input);
      console.log(`= ${result}`);
    } catch (err) {
      console.error(`Error: ${err.message}`);
    }
  });

  rl.on('close', () => {
    console.log('Goodbye!');
    process.exit(0);
  });
}
