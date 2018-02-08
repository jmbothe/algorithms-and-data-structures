const { mergeSort } = require('./merge-sort');

describe('mergeSort()', () => {
  test('it should sort a list of numbers ascending', () => {
    let result = mergeSort([2, 4, 6, 8, 1, 3, 5, 7], 'numeric ascending');
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);

    result = mergeSort([2, -3, -2, 0, 1, -1], 'numeric ascending');
    expect(result).toEqual([-3, -2, -1, 0, 1, 2]);

    result = mergeSort([1], 'numeric ascending');
    expect(result).toEqual([1]);

    const longAssArray = new Array(2 ** 16).fill()
      .map(() => Math.floor(Math.random() * (2 ** 16)));
    expect(mergeSort(longAssArray, 'numeric ascending'))
      .toEqual(longAssArray.sort((a, b) => a - b));
  });
  test('it should sort a list of numbers descending', () => {
    const result = mergeSort([2, 4, 6, 8, 1, 3, 5, 7], 'numeric descending');
    expect(result).toEqual([8, 7, 6, 5, 4, 3, 2, 1]);
  });
  test('it should sort a list of strings ascending', () => {
    const result = mergeSort(['A', 'c', 'b', 'D', 'f', 'E'], 'string ascending');
    expect(result).toEqual(['A', 'b', 'c', 'D', 'E', 'f']);
  });
  test('it should sort a list of string descening', () => {
    const result = mergeSort(['A', 'c', 'b', 'D', 'f', 'E'], 'string descending');
    expect(result).toEqual(['f', 'E', 'D', 'c', 'b', 'A']);
  });
});
