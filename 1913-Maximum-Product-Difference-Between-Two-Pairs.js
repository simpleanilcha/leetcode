/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  const sortedNums = nums.sort((a, b) => a - b)
  const highestPair = sortedNums[sortedNums.length - 1] * sortedNums[sortedNums.length - 2]
  const lowestPair = sortedNums[0] * sortedNums[1]
  return highestPair - lowestPair
};