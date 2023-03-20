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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  // recursive way
  const result = []
  const traverse = (node) => {
      if (!node) return
      traverse(node.left)
      traverse(node.right)
      result.push(node.val)
  }
  traverse(root)
  return result
};

/*
Case 1
root = [1,null,2,3]
Output = [3,2,1]

Case 2
root = []
Output = []

Case 3
root = [1]
Output = [1]
*/