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

var inorderTraversal = function (root) {
  // recursive way
  const result = [];

  const traverse = (node) => {
    if (!node) return;
    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  };

  traverse(root);
  return result;
};

// console.log(inorderTraversal(1,null,2,3))

/*
Case 1
root = [1,null,2,3]
Output = [1,3,2]

Case 2
root = []
Output = []

Case 3
root = [1]
Output = [1]
*/
