/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  // remove duplicates
  nums1 = [...new Set(nums1)]
  nums2 = [...new Set(nums2)]

  // filter nums that have in both arrays
  const remainingNums1 = nums1.filter(num => !nums2.includes(num))
  const remainingNums2 = nums2.filter(num => !nums1.includes(num))

  return [remainingNums1, remainingNums2]
};