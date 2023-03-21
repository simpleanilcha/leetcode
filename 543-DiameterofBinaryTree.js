/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let diameter = 0

  const getHeight = node => {
    if (!node) return 0

    const leftHeight = getHeight(node.left)
    const rightHeight = getHeight(node.right)

    diameter = Math.max(diameter, (leftHeight+rightHeight))
    return Math.max(leftHeight, rightHeight) + 1
  }

  getHeight(root)
  return diameter
};