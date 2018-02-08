/*
Exit condition of recursive function.
Iterates over a sub-array to find missing number.
This function could be used to find the gap in an array of any length,
but its wrost-case time complexity is O(n), so it is only used as a helper once the main function
has broken the array down to a sub-array of length 2 or 3.
*/
const handleSmallArray = array =>
  array.find((item, index) =>
    Math.abs(item + (array[index + 1] * -1)) !== 1) + 1;
/*
Main function is built around a property of sorted lists of integers that increment by +1:
For any given list, if the length is an even number,
then the sum of the first and last numbers will be an odd number.
Similarly, if the list length is odd, then sum of first and last will be even.
Knowing this, we can test each half of the array as its own sub-array:
if the sub-array adheres to these rules, that means the missing number is not in the sub-array,
and we don't have to search that half of the array.
So for each call to findMissingNumber(),
we only touch the first, last, and middle elements of the array,
and then if another recursive call is neccessary,
we only make a copy of the offending half of the array.
This gives us a search algorithm with logaritmic worst-case time complexity--i.e., O(log n).
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
