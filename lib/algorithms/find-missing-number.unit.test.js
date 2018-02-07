const findMissingNumber = require('./find-missing-number');

test('Given an array of size (n - x) and given that there are numbers from x to n with one number missing, the missing number is to be found.', () => {
  expect(findMissingNumber([2, 4])).toBe(3);
  expect(findMissingNumber([3, 4, 6])).toBe(5);
  expect(findMissingNumber([3, 5, 6])).toBe(4);
  expect(findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9])).toBe(5);
  expect(findMissingNumber([1, 2, 3, 4, 5, 7, 8, 9])).toBe(6);
  expect(findMissingNumber([1, 2, 3, 5, 6, 7, 8, 9])).toBe(4);
  expect(findMissingNumber([1, 2, 3, 4, 5, 6, 7, 9, 10])).toBe(8);
  expect(findMissingNumber([1, 2, 4, 5, 6, 7, 8, 9, 10])).toBe(3);
  expect(findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10])).toBe(5);
  expect(findMissingNumber([1, 2, 3, 4, 5, 7, 8, 9, 10])).toBe(6);
  expect(findMissingNumber([5, 6, 7, 8, 9, 10, 12, 13, 14])).toBe(11);
});
