function lomutoPartition(array, left, right, compare) {
  // lomuto style always picks right-most item as pivot
  const pivot = array[right];
  // j keeps track of where the pivot will eventually need to be moved
  // while also bubbling larger values toward the right side of the array
  let j = left;

  // simple loop over entire bounded sub-array
  for (let i = left; i < right; i++) {
    // if item does NOT need to be moved to other side of pivot
    if (compare(array[i], pivot) < 0) {
      // swap array values, ES+ style
      // if j value is lagging behind i, that means arr[j] is currently out of order in relation to arr[i], so needs swap
      // otherwise if j = i, this swap is meaningless
      [array[i], array[j]] = [array[j], array[i]];
      j++;
    }
  }
  // at end of loop, move pivot to where it needs to be
  [array[right], array[j]] = [array[j], array[right]];
  return j;
}

function quickSort(array, left, right, compare) {
  // base case: Array of size one or zero is already sorted
  // if boundaries encompase a larger array, proceed
  if (left < right) {
    // index of where pivot ends up after the array has been partitioned
    const pivotIndex = lomutoPartition(array, left, right, compare);

    // divide and conquer. Quicksort is not exactly logN DaC, cuz it divides based on where the pivot ends up.
    // If pivot doesnt move, thats bad cuz then left-side sub-array length is only arr.length - 1.
    quickSort(array, left, pivotIndex - 1, compare);
    quickSort(array, pivotIndex + 1, right, compare);
  }
  return array;
}

module.exports = { quickSort };
