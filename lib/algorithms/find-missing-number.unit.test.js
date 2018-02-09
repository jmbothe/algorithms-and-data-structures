const { findMissingNumber } = require('./find-missing-number');

describe('findMissingNumber()', () => {
  test('Given an array of integers from x to n (incrementing by +1) with one number missing, the missing number is to be found.', () => {
    expect(findMissingNumber([0, 2])).toBe(1);
    expect(findMissingNumber([0, 1, 3])).toBe(2);
    expect(findMissingNumber([0, 2, 3])).toBe(1);
    expect(findMissingNumber([0, 1, 2, 4])).toBe(3);
    expect(findMissingNumber([0, 1, 3, 4])).toBe(2);
    expect(findMissingNumber([0, 2, 3, 4])).toBe(1);
    expect(findMissingNumber([0, 1, 3, 4, 5])).toBe(2);
    expect(findMissingNumber([0, 1, 2, 4, 5])).toBe(3);

    const longAssArray = new Array(2 ** 16).fill().map((_, i) => i);
    longAssArray.splice(20, 1);
    expect(findMissingNumber(longAssArray)).toBe(20);
  });

  test('it should handle a series of negative integers', () => {
    expect(findMissingNumber([-5, -4, -3, -1])).toBe(-2);
    expect(findMissingNumber([-7, -5, -4, -3, -2])).toBe(-6);
  });

  test('it should handle a mixed series of negative integers, positive integers, and zero', () => {
    expect(findMissingNumber([-2, -1, 1, 2])).toBe(0);
    expect(findMissingNumber([-2, -1, 0, 2])).toBe(1);
    expect(findMissingNumber([-2, 0, 1, 2])).toBe(-1);
    expect(findMissingNumber([-4, -3, -1, 0])).toBe(-2);
    expect(findMissingNumber([-4, -3, -2, 0, 1, 2])).toBe(-1);
    expect(findMissingNumber([-3, -2, -1, 0, 2])).toBe(1);
  });
});
