/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let arr = new Array(nums.length).fill(0);
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    if (arr[nums[i] - 1] === 0) {
      arr[nums[i] - 1] = nums[i];
    } else {
      res.push(nums[i]);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      res.push(i + 1);
      break;
    }
  }

  return res;
};