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

var preorderTraversal = function(root) {
  // RECURSIVE way
  const result = []
  function preorder(root) {
      if (!root) return
      result.push(root.val)
      preorder(root.left)
      preorder(root.right)
  }
  preorder(root)
  return result

  // ITERATIVE way
  // const stack = [root]
  // const result = []
  // while (stack.length) {
  //   const node = stack.pop()
  //   if (node) {
  //     result.push(node.val)
  //     stack.push(node.right, node.left)
  //   }
  // }
  // return result
};

/*
Case 1
root = [1,null,2,3]
Output = [1,2,3]

Case 2
root = []
Output = []

Case 3
root = [1]
Output = [1]
*/