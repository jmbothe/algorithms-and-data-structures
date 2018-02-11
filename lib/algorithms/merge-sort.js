const merge = (left, right, compare) => {
  const result = [];
  while (left.length && right.length) {
    if (compare(left[0], right[0]) < 0) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
};
/**
 * Sorts an array according to a specified sort order. Worst-case time complexity is O(n log n).
 * @memberof algo
 * @param {array} array An array of values (e.g., integers, strings, objects, or anything else that can be reliably compared by the function you specify).
 * @param {function} compare Specifies a function that determines sort order. More info at {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort|MDN - Array.sort()}.
 * @returns {array} The sorted array.
 * @example algo.mergeSort([2, 1, 3], (a, b) => a - b); // [1, 2, 3]
 */
const mergeSort = (array, compare) => {
  if (array.length <= 1) return array;

  const left = array.slice(0, Math.floor(array.length / 2));
  const right = array.slice(Math.floor(array.length / 2));

  return merge(
    mergeSort(left, compare),
    mergeSort(right, compare),
    compare,
  );
};

module.exports = { mergeSort };
