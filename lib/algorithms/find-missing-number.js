/*
Return value of exit condition of recursive function.
*/
const handleSmallArray = array =>
  array.find((item, index) =>
    Math.abs(item + (array[index + 1] * -1)) !== 1) + 1;
/**
 * Finds the missing number in an array of integers from x to n (incrementing by +1) with one number missing.
 * @memberof algo
 * @param {array} array an array of integers.
 * @returns {number} The missing number.
 * @example algo.findMissingNumber([0, 1, 3]); // 2
 */
const findMissingNumber = (array) => {
  if (array.length <= 3) return handleSmallArray(array);

  const leftLength = Math.floor(array.length / 2);
  const leftMatch = array[0] + array[leftLength - 1];

  const rightLength = Math.ceil(array.length / 2);
  const rightMatch = array[leftLength] + array[array.length - 1];

  if (Math.abs(leftMatch % 2) === leftLength % 2) {
    return findMissingNumber(array.slice(0, leftLength));
  } else if (Math.abs(rightMatch % 2) === rightLength % 2) {
    return findMissingNumber(array.slice(leftLength));
  }
  /* if both halves of the array adhere to rules,
  then the missing number is between the two halves */
  return Math.floor((array[0] + array[array.length - 1]) / 2);
};

module.exports = { findMissingNumber };

/*
It is possible to write this function in a more declarative manner,
but it raises issues re: efficiency,since it requires making copies
of both halves of the array for each call.

const breaksSequenceRules = array =>
  (Math.abs(array[0] + array[array.length - 1]) % 2) === array.length % 2;

const findMissingNumber = (array) => {
  if (array.length <= 3) return handleSmallArray(array);

  const left = array.slice(0, Math.floor(array.length / 2));
  const right = array.slice(Math.floor(array.length / 2));
  const middle = Math.floor((array[0] + array[array.length - 1]) / 2);

  const next = [left, right].filter(breaksSeqeunceRules)[0];

  return next ? findMissingNumber(next) : middle;
};
*/
