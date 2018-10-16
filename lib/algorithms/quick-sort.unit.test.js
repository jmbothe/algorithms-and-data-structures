const { quickSort } = require('./quick-sort');
const {
  random,
  numAscend,
  numDescend,
  alphaAscend,
  alphaDescend,
} = require('./helpers');

describe('quickSort()', () => {
  test('it should sort an array', () => {
    let result = quickSort([2, 4, 6, 8, 1, 3, 5, 7], 0, 7, numAscend);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);

    result = quickSort([2, -3, -2, 0, 1, -1], 0, 5, numAscend);
    expect(result).toEqual([-3, -2, -1, 0, 1, 2]);

    result = quickSort([1], null, null, numAscend);
    expect(result).toEqual([1]);
  });

  test('it should sort a list of numbers descending', () => {
    const result = quickSort([2, 4, 6, 8, 1, 3, 5, 7], 0, 7, numDescend);
    expect(result).toEqual([8, 7, 6, 5, 4, 3, 2, 1]);
  });

  test('it should sort a list of strings ascending', () => {
    const result = quickSort(['A', 'c', 'b', 'D', 'f', 'E'], 0, 5, alphaAscend);
    expect(result).toEqual(['A', 'b', 'c', 'D', 'E', 'f']);
  });

  test('it should sort a list of string descening', () => {
    const result = quickSort(['A', 'c', 'b', 'D', 'f', 'E'], 0, 5, alphaDescend);
    expect(result).toEqual(['f', 'E', 'D', 'c', 'b', 'A']);
  });
});
