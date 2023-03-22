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
 * @return {TreeNode}
 */
var balanceBST = function(root) {
  const arr = []
  
  // traverse the BST in-order and add each node's value to the array
  const inorderTraversal = node => {
    if (!node) return
    inorderTraversal(node.left)
    arr.push(node.val)
    inorderTraversal(node.right)
  }
  inorderTraversal(root)
  
  // recursively build a balanced BST from the values in the array
  const buildBST = (start, end) => {
    if (start > end) return null
    const mid = Math.floor((start+end) / 2)
    const node = new TreeNode(arr[mid])
    node.left = buildBST(start, mid - 1)
    node.right = buildBST(mid + 1, end)
    return node
  }
  
  return buildBST(0, arr.length - 1)
};