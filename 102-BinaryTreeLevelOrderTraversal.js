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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  let queue = [root]

  let level = 0
  let result = []
  while (queue.length > 0) {
    const levelNodes = []
    let levelLength = queue.length
    for (let i = 0; i < levelLength; i++) {
      let node = queue.shift()
      levelNodes.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    level++
    result.push(levelNodes)
  }
  return result
};