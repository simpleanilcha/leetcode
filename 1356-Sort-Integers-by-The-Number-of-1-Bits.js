/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  function bitCount(num) {
    let count = 0;
    while (num > 0) {
      count += num & 1;
      num = num >> 1;
    }
    return count;
  }
  return arr.sort((a, b) => bitCount(a) - bitCount(b) || a - b);
};