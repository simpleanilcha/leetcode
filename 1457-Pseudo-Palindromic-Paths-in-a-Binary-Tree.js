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
var pseudoPalindromicPaths = function (root) {
  let count = 0

  function isPalindrome(arr) {
    let odd = 0

    for (const e of arr) {
      if (e % 2) {
        if (odd) return false
        else odd++
      }
    }

    return true
  }

  const arr = Array(10).fill(0)

  function traverse(node) {
    if (!node) return

    arr[node.val]++

    if (!node.left && !node.right && isPalindrome(arr)) count++

    traverse(node.left)
    traverse(node.right)

    arr[node.val]--
  }

  traverse(root)

  return count
};