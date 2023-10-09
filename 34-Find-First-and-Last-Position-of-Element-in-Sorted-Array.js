/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let start = -1;
  let end = -1;

  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    if (nums[i] < target) i++;
    if (nums[j] > target) j--;

    if (nums[i] === target && nums[j] === target) {
      start = i;
      end = j;
      break;
    }
  }

  return [start, end];
};