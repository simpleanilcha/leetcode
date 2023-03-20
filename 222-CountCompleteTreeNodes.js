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
var countNodes = function(root) {
  if (!root) return 0
  const totalLeftNodes = countNodes(root.left)
  const totalRightNodes = countNodes(root.right)
  return totalLeftNodes + totalRightNodes + 1
};


/*
Case 1
root = [1,2,3,4,5,6]
Output = 6

Case 2
root = []
Output = 0

Case 3
root = [1]
Output = 1
*/