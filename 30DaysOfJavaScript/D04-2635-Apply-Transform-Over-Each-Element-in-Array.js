/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const resultArr = []
  for (let i = 0; i < arr.length; i++) {
    resultArr.push(fn(arr[i], i))
  }
  return resultArr

  // Approach 4: Preallocate Memory
  // const resultArr = new Array(arr.length);
  // for (let i = 0; i < arr.length; ++i) {
  //     resultArr[i] = (fn(arr[i], i));
  // }
  // return resultArr;
};