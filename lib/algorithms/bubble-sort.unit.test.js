const { bubbleSort } = require('./bubble-sort');
const {
  numAscend,
  numDescend,
  alphaAscend,
  alphaDescend,
} = require('./helpers');

describe('bubbleSort()', () => {
  test('it should sort a list of numbers ascending', () => {
    let result = bubbleSort([2, 4, 6, 8, 1, 3, 5, 7], numAscend);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);

    result = bubbleSort([2, -3, -2, 0, 1, -1], numAscend);
    expect(result).toEqual([-3, -2, -1, 0, 1, 2]);

    result = bubbleSort([1], numAscend);
    expect(result).toEqual([1]);
  });

  test('it should sort a list of numbers descending', () => {
    const result = bubbleSort([2, 4, 6, 8, 1, 3, 5, 7], numDescend);
    expect(result).toEqual([8, 7, 6, 5, 4, 3, 2, 1]);
  });

  test('it should sort a list of strings ascending', () => {
    const result = bubbleSort(['A', 'c', 'b', 'D', 'f', 'E'], alphaAscend);
    expect(result).toEqual(['A', 'b', 'c', 'D', 'E', 'f']);
  });

  test('it should sort a list of string descening', () => {
    const result = bubbleSort(['A', 'c', 'b', 'D', 'f', 'E'], alphaDescend);
    expect(result).toEqual(['f', 'E', 'D', 'c', 'b', 'A']);
  });
});
