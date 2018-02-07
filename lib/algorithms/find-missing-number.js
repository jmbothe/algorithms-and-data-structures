function findMissingNumber(array) {
  const { length } = array;
  const match = array[0] + array[length - 1];

  if (array[1] + array[length - 2] !== match) {
    return array[1] - array[0] !== 1
      ? array[1] - 1
      : array[length - 1] - 1;
  }
  array.pop();
  array.shift();
  return findMissingNumber(array) || match / 2;
  /*
  If you don't want to mutate the array, you could pass a subArray to the recursive call:
  const subArray = array.slice(1, length - 1);
  */
}

module.exports = findMissingNumber;
