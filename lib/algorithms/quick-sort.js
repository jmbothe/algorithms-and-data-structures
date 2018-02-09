const { random } = require('./helpers');

const quickSort = (array, compareFunction) => {
  if (array.length <= 1) return array;

  const pivot = array[random(0, array.length)];
  // center is declared in the event that there are duplicates of the pivot
  const center = [];
  const left = [];
  const right = [];

  for (let i = 0; i < array.length; i += 1) {
    if (compareFunction(array[i], pivot) < 0) {
      left.push(array[i]);
    } else if (compareFunction(array[i], pivot) > 0) {
      right.push(array[i]);
    } else {
      center.push(array[i]);
    }
  }

  return [
    ...quickSort(left, compareFunction),
    ...center,
    ...quickSort(right, compareFunction),
  ];
};

module.exports = { quickSort };

/*

Like other algorithms, quick-sort can be expressed in more declarative terms,
but again you end up sacraficing performance for clarity.
Here are some examples of how you might break up the main array declaratively.

USING REDUCE:

  const next = array.reduce((acc, item) => {
    if (compareFunction(item, pivot) < 0) {
      acc.left.push(item);
    } else if (compareFunction(item, pivot) > 0) {
      acc.right.push(item);
    } else {
      acc.center.push(item);
    }
    return acc;
  }, { center: [], left: [], right: [] });

USING FILTER (this one is particularly slow):

  const center = array.filter(item => compareFunction(item, pivot) === 0);
  const left = array.filter(item => compareFunction(item, pivot) < 0);
  const right = array.filter(item => compareFunction(item, pivot) > 0);

*/