/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  nums.sort((a, b) => a - b)
  let sum = 0, left = 0, right = 0, res = 0

  while (right < nums.length) {
    sum += nums[right]
    if (nums[right] * (right - left + 1) > sum + k) {
      sum -= nums[left++]
    }
    res = Math.max(res, right - left + 1)
    right++
  }

  return res
};