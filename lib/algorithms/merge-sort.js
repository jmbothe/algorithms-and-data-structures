const TESTS = {
  'numeric ascending': (left, right) => left[0] < right[0],
  'numeric descending': (left, right) => left[0] > right[0],
  'string ascending': (left, right) => left[0][0].toLowerCase() < right[0][0].toLowerCase(),
  'string descending': (left, right) => left[0][0].toLowerCase() > right[0][0].toLowerCase(),
};

function getMerge(test) {
  const merge = (left, right) => {
    const result = [];
    while (left.length && right.length) {
      if (test(left, right)) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return [...result, ...left, ...right];
  };
  return merge;
}

function mergeSort(array, mergeType) {
  if (array.length <= 1) return array;

  mergeType = typeof mergeType !== 'string' ? mergeType : getMerge(TESTS[mergeType]);

  const left = array.slice(0, Math.floor(array.length / 2));
  const right = array.slice(Math.floor(array.length / 2));

  return mergeType(mergeSort(left, mergeType), mergeSort(right, mergeType));
}

module.exports = { mergeSort };
