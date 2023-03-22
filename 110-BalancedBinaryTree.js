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
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (!root) return true

  const getHeight = node => {
      if (!node) return 0
      const leftHeight = getHeight(node.left)
      const rightHeight = getHeight(node.right)

      // A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

      // check if the height difference is within 1
      if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) return -1
      return Math.max(leftHeight, rightHeight) + 1
  }

  return getHeight(root) !== -1
};