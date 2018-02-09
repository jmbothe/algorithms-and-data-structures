const merge = (left, right, compareFunction) => {
  const result = [];
  while (left.length && right.length) {
    if (compareFunction(left[0], right[0]) < 0) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
};

const mergeSort = (array, compareFunction) => {
  if (array.length <= 1) return array;

  const left = array.slice(0, Math.floor(array.length / 2));
  const right = array.slice(Math.floor(array.length / 2));

  return merge(
    mergeSort(left, compareFunction),
    mergeSort(right, compareFunction),
    compareFunction,
  );
};

module.exports = { mergeSort };
