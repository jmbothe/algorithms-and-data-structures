const { random } = require('./helpers');
/**
 * Sorts an array according to a specified sort order. Worst-case time complexity is O(n log n).
  * @memberof algo
 * @param {array} array An array of values (e.g., integers, strings, objects, or anything else that can be reliably compared by the function you specify).
 * @param {function} compare Specifies a function that determines sort order. More info at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort.
 * @returns {array} The sorted array.
 * @example algo.quickSort([2, 1, 3], (a, b) => a - b); // [1, 2, 3]
 */
const quickSort = (array, compare) => {
  if (array.length <= 1) return array;

  const pivot = array[random(0, array.length)];
  // center is declared in the event that there are duplicates of the pivot
  const center = [];
  const left = [];
  const right = [];

  for (let i = 0; i < array.length; i += 1) {
    if (compare(array[i], pivot) < 0) {
      left.push(array[i]);
    } else if (compare(array[i], pivot) > 0) {
      right.push(array[i]);
    } else {
      center.push(array[i]);
    }
  }
  return [
    ...quickSort(left, compare),
    ...center,
    ...quickSort(right, compare),
  ];
};

module.exports = { quickSort };

/*
Like other algorithms, quick-sort can be expressed in more declarative terms,
but again you end up sacraficing performance for clarity.
Here are some examples of how you might break up the main array declaratively.

USING REDUCE:

  const next = array.reduce((acc, item) => {
    if (compare(item, pivot) < 0) {
      acc.left.push(item);
    } else if (compare(item, pivot) > 0) {
      acc.right.push(item);
    } else {
      acc.center.push(item);
    }
    return acc;
  }, { center: [], left: [], right: [] });

USING FILTER (this one is particularly slow):

  const center = array.filter(item => compare(item, pivot) === 0);
  const left = array.filter(item => compare(item, pivot) < 0);
  const right = array.filter(item => compare(item, pivot) > 0);
*/
