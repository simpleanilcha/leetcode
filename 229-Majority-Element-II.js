/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let m, n;
  let mCount = 0;
  let nCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === m) {
      mCount++;
    } else if (nums[i] === n) {
      nCount++;
    } else if (mCount === 0) {
      m = nums[i];
      mCount = 1;
    } else if (nCount === 0) {
      n = nums[i];
      nCount = 1;
    } else {
      mCount--;
      nCount--;
    }
  }

  const oneThird = Math.floor(nums.length / 3);
  mCount = 0;
  nCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === m) {
      mCount++;
    } else if (nums[i] === n) {
      nCount++;
    }
  }
  const result = [];
  mCount > oneThird && result.push(m);
  nCount > oneThird && result.push(n);
  return result;
};