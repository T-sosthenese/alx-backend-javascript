const assert = require('assert');
const mocha = require('mocha');

const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('Should return the sum of two integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, -1), 0);
    assert.strictEqual(calculateNumber(1, -3), -2);
  });

  it('Should round floats', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    assert.strictEqual(calculateNumber(0.1, 0), 0);
    assert.strictEqual(calculateNumber(1.4, -4.5), -3);
  });

  it('Should return the rounded number if only one is provided', () => {
    assert.strictEqual(calculateNumber(2), 2);
    assert.strictEqual(calculateNumber(2.7), 3);
  });

  it('Should cast non-numbers into numbers', () => {
    assert.strictEqual(calculateNumber(true, '3'), 4);
    assert.strictEqual(calculateNumber(1, '3.7'), 5);
    assert.strictEqual(calculateNumber('1.2', 3.7), 5);
  });

  it('Should throw a TypeError if either param cannot be coerced to a number', () => {
    assert.throws(() => calculateNumber('hello'), {
      name: 'TypeError',
      message: 'Parameters must be numbers'
    });
    assert.throws(() => calculateNumber(12, 'dog'), {
      name: 'TypeError',
      message: 'Parameters must be numbers'
    });
  });
});
