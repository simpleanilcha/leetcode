/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  const halfLen = nums.length / 2
  const result = []
  for (let i = 0; i < halfLen; i++) {
    result.push(nums[i], nums[i+n])
  }
  return result    
};