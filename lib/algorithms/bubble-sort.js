/**
 * Sorts an array according to a specified sort order. Worst-case time complexity is O(n^2).
 * @memberof algo
 * @param {array} array An array of values (e.g., integers, strings, objects, or anything else that can be reliably compared by the function you specify).
 * @param {function} compare Specifies a function that determines sort order. More info at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort.
 * @param {boolean} swap Recursive break condition. False if previous call didn't mutate the array.
 * @returns {array} The sorted array.
 * @example algo.bubbleSort([2, 1, 3], (a, b) => a - b); // [1, 2, 3]
 */
const bubbleSort = (array, compare, swap = true) => {
  if (!swap) return array;

  swap = false;

  for (let i = 0; i < array.length - 1; i += 1) {
    if (compare(array[i], array[i + 1]) > 0) {
      const temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
      swap = true;
    }
  }
  return bubbleSort(array, compare, swap);
};

module.exports = { bubbleSort };
