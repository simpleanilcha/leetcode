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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  if (!subRoot) return true
  if (!root) return false

  const checkIdentical = (root, subRoot) => {
    if (!root && !subRoot) return true
    if(!root || !subRoot) return false

    if (root.val === subRoot.val) {
      return checkIdentical(root.left, subRoot.left) && checkIdentical(root.right, subRoot.right)
    }
    return false
  }

  if (root.val === subRoot.val) {
    if (checkIdentical(root, subRoot)) return true
  }

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};
