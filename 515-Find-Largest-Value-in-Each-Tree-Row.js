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
var largestValues = function (root) {
  const sequence = [];
  function dfs(node, height, sequence) {
    if (!node) {
      return;
    }

    if (height < sequence.length) {
      if (node.val > sequence[height]) {
        sequence[height] = node.val;
      }
    } else {
      sequence.push(node.val);
    }

    dfs(node.left, height + 1, sequence);
    dfs(node.right, height + 1, sequence);
  }

  dfs(root, 0, sequence);
  return sequence;
};