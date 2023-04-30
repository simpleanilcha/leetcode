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
};
