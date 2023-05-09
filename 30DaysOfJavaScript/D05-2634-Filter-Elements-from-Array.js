/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  // Approach 3: Preallocate Memory
  let size = 0;
  const filteredArr = new Array(arr.length);
  for (let i = 0; i < arr.length; ++i) {
    if (fn(arr[i], i)) {
      filteredArr[size] = arr[i];
      size++;
    }
  }

  // Ensure new array is of length size
  while (filteredArr.length > size) {
    filteredArr.pop();
  }

  return filteredArr;
};