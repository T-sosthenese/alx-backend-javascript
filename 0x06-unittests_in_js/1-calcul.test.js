const assert = require('assert');
const mocha = require('mocha');

const calculateNumber = require('./1-calcul');

const SUM = 'SUM';
const SUBTRACT = 'SUBTRACT';
const DIVIDE = 'DIVIDE';
const INVALID = 'INVALID';

describe('calculateNumber', () => {
  describe('type SUM', () => {
    it('Should return the sum of integers', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
      assert.strictEqual(calculateNumber(SUM, 2, -2), 0);
      assert.strictEqual(calculateNumber(SUM, 1, -4), -3);
    });

    it('Should return the sum of rounded floats', () => {
      assert.strictEqual(calculateNumber(SUM, 1.4, 5), 6);
      assert.strictEqual(calculateNumber(SUM, 1, 4.5), 6);
      assert.strictEqual(calculateNumber(SUM, 1.4, 4.5), 6);
      assert.strictEqual(calculateNumber(SUM, 8, -8.2), 0);
      assert.strictEqual(calculateNumber(SUM, 7.8, -8), 0);
      assert.strictEqual(calculateNumber(SUM, 7.8, -8.2), 0);
      assert.strictEqual(calculateNumber(SUM, 3, -5.2), -2);
      assert.strictEqual(calculateNumber(SUM, 3.1, -5), -2);
      assert.strictEqual(calculateNumber(SUM, 3.1, -5.2), -2);
    });

    it('Should return rounded number if only one is provided', () => {
      assert.strictEqual(calculateNumber(SUM, 8.7), 9);
      assert.strictEqual(calculateNumber(SUM, 0.3), 0);
      assert.strictEqual(calculateNumber(SUM, -8.7), -9);
    });
  });

  describe('type SUBTRACT', () => {
    it('Should return the difference of integers', () => {
      assert.strictEqual(calculateNumber(SUBTRACT, 5, 1), 4);
      assert.strictEqual(calculateNumber(SUBTRACT, 5, 5), 0);
      assert.strictEqual(calculateNumber(SUBTRACT, 1, 5), -4);
    });

    it('Should return the difference of floats', () => {
      assert.strictEqual(calculateNumber(SUBTRACT, 8.6, 4.1), 5);
      assert.strictEqual(calculateNumber(SUBTRACT, 8.6, 4), 5);
      assert.strictEqual(calculateNumber(SUBTRACT, 9, 4.1), 5);

      assert.strictEqual(calculateNumber(SUBTRACT, 10.2, 9.8), 0);
      assert.strictEqual(calculateNumber(SUBTRACT, 10.2, 10), 0);
      assert.strictEqual(calculateNumber(SUBTRACT, 10, 9.8), 0);

      assert.strictEqual(calculateNumber(SUBTRACT, 8.2, 9.2), -1);
      assert.strictEqual(calculateNumber(SUBTRACT, 8.2, 9), -1);
      assert.strictEqual(calculateNumber(SUBTRACT, 8, 9.2), -1);
    });

    it('Should return rounded difference if one is provided', () => {
        assert.strictEqual(calculateNumber(SUBTRACT, 8.6), 9);
        assert.strictEqual(calculateNumber(SUBTRACT, 0.3), 0);
        assert.strictEqual(calculateNumber(SUBTRACT, -8.6), -9);
    });
  });

  describe('type DIVIDE', () => {
    it('Should return the quotient of integers', () => {
      assert.strictEqual(calculateNumber(DIVIDE, 9, 4), 2.25);
      assert.strictEqual(calculateNumber(DIVIDE, -9, 4), -2.25);
      assert.strictEqual(calculateNumber(DIVIDE, 9, -4), -2.25);
      assert.strictEqual(calculateNumber(DIVIDE, -9, -4), 2.25);
    });

    it('Should return quotient of non-zero rounded floats', () => {
      assert.strictEqual(calculateNumber(DIVIDE, 1.6, 5.2), 0.4);
      assert.strictEqual(calculateNumber(DIVIDE, 1.6, 5), 0.4);
      assert.strictEqual(calculateNumber(DIVIDE, 2, 5.2), 0.4);
      assert.strictEqual(calculateNumber(DIVIDE, -1.6, 5.2), -0.4);
      assert.strictEqual(calculateNumber(DIVIDE, -1.6, 5), -0.4);
      assert.strictEqual(calculateNumber(DIVIDE, -2, 5.2), -0.4);
      assert.strictEqual(calculateNumber(DIVIDE, 1.6, -5.2), -0.4);
      assert.strictEqual(calculateNumber(DIVIDE, 1.6, -5), -0.4);
      assert.strictEqual(calculateNumber(DIVIDE, 2, -5.2), -0.4);
      assert.strictEqual(calculateNumber(DIVIDE, -1.6, -5.2), 0.4);
      assert.strictEqual(calculateNumber(DIVIDE, -1.6, -5), 0.4);
      assert.strictEqual(calculateNumber(DIVIDE, -2, 5.2), -0.4);
    });

    it('Should return "ERROR" if divisor rounds to 0', () => {
      assert.strictEqual(calculateNumber(DIVIDE, 8.4, 0.4), 'ERROR');
      assert.strictEqual(calculateNumber(DIVIDE, 8.4, -0.4), 'ERROR');
      assert.strictEqual(calculateNumber(DIVIDE, 8.4, 0), 'ERROR');
    });

    it('Should return 0 if dividend rounds of to 0', () => {
      assert.strictEqual(calculateNumber(DIVIDE, 0.3, 3.6), 0);
      assert.strictEqual(calculateNumber(DIVIDE, -0.3, 3.6), 0);
      assert.strictEqual(calculateNumber(DIVIDE, 0, 3.6), 0);
    });
  });

  describe('Invalid operation type', () => {
    it('Should throw error if type is invalid', () => {
      assert.throws(() => calculateNumber(INVALID, 5.7, 4.6), {
        message:
          'Invalid operation type. Valid types are "SUM", "SUBTRACT", and "DIVIDE".'
      });
    });
  });
});
