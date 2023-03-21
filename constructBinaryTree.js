// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

function constructBinaryTree(arr) {
  if (!arr.length) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (i < arr.length) {
    const node = queue.shift();
    if (arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}

const arr = [1, null, 2, 3];
const root = constructBinaryTree(arr);
console.log(root);

// Binary Tree preorder Traversal
// 144. Binary Tree Preorder Traversal
// https://leetcode.com/problems/binary-tree-preorder-traversal/

const preorderTraversal = (root) => {
  // recursive way
  const result = []
  const traverse = node => {
    if (!node) return
    result.push(node.val)
    traverse(node.left)
    traverse(node.right)
  }
  traverse(root)
  return result
}

console.log(preorderTraversal(root))    // output: [1, 2, 3]

// Binary Tree inorder Traversal
// 94. Binary Tree Inorder Traversal
// https://leetcode.com/problems/binary-tree-inorder-traversal/

const inorderTraversal = root => {
  const result = []
  const traverse = node => {
    if (!node) return
    traverse(node.left)
    result.push(node.val)
    traverse(node.right)
  }
  traverse(root)
  return result
}

console.log(inorderTraversal(root))    // output: [1, 3, 2]


// Binary Tree postorder Traversal
// 145. Binary Tree Postorder Traversal
// https://leetcode.com/problems/binary-tree-postorder-traversal/

const postorderTraversal = root => {
  const result = []
  const traverse = node => {
    if (!node) return
    traverse(node.left)
    traverse(node.right)
    result.push(node.val)
  }
  traverse(root)
  return result
}
console.log(postorderTraversal(root))   // output [3, 2, 1]

// 222. Count Complete Tree Nodes
// https://leetcode.com/problems/count-complete-tree-nodes/

const countNodes = root => {
  if (!root) return 0
  const leftNodesCount = countNodes(root.left)
  const rightNodesCount = countNodes(root.right)
  return leftNodesCount + rightNodesCount + 1
}

console.log(countNodes(root))           // output 3
