/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let sortedNums = nums.sort((a, b) => b - a)
  return (sortedNums[0] - 1) * (sortedNums[1] - 1)
};