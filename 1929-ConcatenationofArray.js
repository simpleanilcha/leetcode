/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  const ans = []
  const numsLength = nums.length

  for (let i = 0; i < numsLength; i++) {
    ans[i] = nums[i]
    ans[i + numsLength] = nums[i]
  }

  return ans

  // short way
  // return [...nums, ...nums]
};