/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const leaf = (root, result = []) => {
    if (root?.left) leaf(root.left, result)
    if (root?.right) leaf(root.right, result)
    if (!root?.left && !root?.right && root?.val) result.push(root?.val)
    return result
  }
  return leaf(root1).toString() === leaf(root2).toString()
};