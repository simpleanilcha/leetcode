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
let root = constructBinaryTree(arr);
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


// 700. Search in a Binary Search Tree
// https://leetcode.com/problems/search-in-a-binary-search-tree

root = constructBinaryTree([4,2,7,1,3]);
var searchBST = function(root, val) {
  if (!root) return null

  if (val > root.val) return searchBST(root.right, val)
  else if (val < root.val) return searchBST(root.left, val)
  else return root
};
console.log(searchBST(root, 2))

// 701. Insert into a Binary Search Tree
// https://leetcode.com/problems/insert-into-a-binary-search-tree
root = constructBinaryTree([40,20,60,10,30,50,70]);
var insertIntoBST = function(root, val) {
  if (!root) return new TreeNode(val)

  if (val > root.val) root.right = insertIntoBST(root.right, val)
  else if (val < root.val) root.left = insertIntoBST(root.left, val)

  return root
};
console.log(insertIntoBST(root, 25))

// 450. Delete Node in a BST
// https://leetcode.com/problems/delete-node-in-a-bst/

var deleteNode = function(root, key) {
  if (!root) return null

  const getMinValNode = root => {
      let current = root
      while(current && current.left) {
          current = current.left
      }
      return current
  }

  if (key > root.val) root.right = deleteNode(root.right, key)
  else if (key < root.val) root.left = deleteNode(root.left, key)
  else {
      if (!root.left) return root.right
      else if (!root.right) return root.left
      else {
          const minNode = getMinValNode(root.right)
          root.val = minNode.val
          root.right = deleteNode(root.right, minNode.val)
      }
  }

  return root
};

root = constructBinaryTree([5,3,6,2,4,null,7]);
let key = 3;
let result = deleteNode(root, key)
console.log(result)

// convert returned result TreeNode to an Array
function toArray(root) {
  const result = [];
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();
    result.push(node ? node.val : null);

    if (node) {
      queue.push(node.left);
      queue.push(node.right);
    }
  }

  // return result;

  // remove unnecessary 'null' items from array
  result.forEach(item => {
    if (result[result.length - 1] === null) {
      result.pop()
      return result
    }
  })
  
  return result
}

const convertedResultArr = toArray(result);
console.log(convertedResultArr); // [5, 4, 6, 2, null, null, 7]
