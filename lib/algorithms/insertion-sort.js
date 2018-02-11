/**
 * Sorts an array according to a specified sort order. Best-case time complexity O(n). Worst-case O(n^2).
 * {@link ./lib/algorithms/insertion-sort.js|Sourcecode}.
 * @memberof algo
 * @param {array} array An array of values (e.g., integers, strings, objects, or anything else that can be reliably compared by the function you specify).
 * @param {function} compare Specifies a function that determines sort order. More info at {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort|MDN - Array.sort()}.
 * @returns {array} The sorted array.
 * @example algo.insertionSort([2, 1, 3], (a, b) => a - b); // [1, 2, 3]
 */
const insertionSort = (array, compare) => {
  for (let i = 1; i < array.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (compare(array[i], array[j]) < 0) {
        array.splice(j, 0, array.splice(i, 1)[0]);
      }
    }
  }
  return array;
};

module.exports = { insertionSort };
