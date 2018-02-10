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
