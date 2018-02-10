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
