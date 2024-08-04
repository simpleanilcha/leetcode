/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
  const MOD = 1000000007
  const sumArray = []

  // subarray sum
  for (let i = 0; i < n; i++) {
    let sum = 0
    for (let j = i; j < n; j++) {
      sum += nums[j]
      sumArray.push(sum)
    }
  }

  // sorting sumarray
  sumArray.sort((a, b) => a - b)

  // return total
  let rangeSum = 0;
  for (let i = left - 1; i < right; i++) {
    rangeSum = (rangeSum + sumArray[i]) % MOD;
  }

  return rangeSum;
};