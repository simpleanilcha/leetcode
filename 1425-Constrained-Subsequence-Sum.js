/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function (nums, k) {
  const dp = [[0, nums[0]]]
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    const [index, prevMax] = dp[0]
    if (index === i - k) {
      dp.shift()
    }
    const currentMax = Math.max(prevMax, 0) + nums[i]
    max = Math.max(max, currentMax)
    while (dp.length > 0 && dp[dp.length - 1][1] < currentMax) {
      dp.pop()
    }
    dp.push([i, currentMax])
  }
  return max
};