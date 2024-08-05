/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  const notRepeatedArr = arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item))
  return notRepeatedArr[k - 1] || ''
};