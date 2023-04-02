/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (!nums.length) return null

  // sort nums
  nums.sort((a, b) => a - b)

  // find the middle index and create a new TreeNode with that value
  const mid = Math.floor(nums.length / 2)
  const root = new TreeNode(nums[mid])

  // recursively build left and right subtrees
  root.left = sortedArrayToBST(nums.slice(0, mid))
  root.right = sortedArrayToBST(nums.slice(mid + 1))

  return root
};