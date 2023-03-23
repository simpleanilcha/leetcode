class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

function insertBalanced(arr, start, end) {
  if (start > end) {
    return null;
  }

  arr.sort((a,b) => a - b)

  const mid = Math.floor((start + end) / 2);
  const node = new TreeNode(arr[mid]);

  node.left = insertBalanced(arr, start, mid - 1);
  node.right = insertBalanced(arr, mid + 1, end);

  return node;
}

// const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// const arr = [ 3, 4, 10, 5, 9, 29, 30, 1, 12, 6, 11];
// let root = insertBalanced(arr, 0, arr.length - 1);
// console.log(root)
// let ans = ''

// convert to root to array
const convertToArray = root => {
  if (!root) return null

  const result = []
  const queue = [root]

  while(queue.length) {
    const node = queue.shift()
    result.push(node ? node.val : null)

    if (node) {
      queue.push(node.left)
      queue.push(node.right)
    }
  }

  result.forEach(item => {
    if(result[result.length - 1] === null) {
      result.pop()
      return result
    }
  })

  return result
}
// console.log(convertToArray(root))


// find Min node
const findMinNode = root => {
  let current = root
  while (current && current.left !== null) {
    current = current.left
  }
  return current
}
// ans = findMinNode(root)
// console.log('findMinNode', ans)

// find max node
const findMaxNode = root => {
  let current = root
  while (current.right) current = current.right
  return current
}
// ans = findMaxNode(root)
// console.log('findMaxNode', ans)

// search target in binary tree
const searchBST = (root, target) => {
  if (!root) return null

  if (target < root.val) return searchBST(root.left, target)
  else if (target > root.val) return searchBST(root.right, target)

  return root
}
// ans = searchBST(root, 10)
// console.log('searchBST', ans)

// insert key in Binary Tree
const insertBST = (root, key) => {
  if (!root) return new TreeNode(key)

  if (key < root.val) root.left = insertBST(root.left, key)
  else if (key > root.val) root.right = insertBST(root.right, key)

  return root
}
// ans = insertBST(root, 19)
// console.log('insertBST', ans)

// delete node from Binary Tree
const deleteNode = (root, key) => {
  if (!root) return null

  const getMinNode = root => {
    let current = root
    while (current && current.left) {
      current = current.left
    }
    return current
  }

  if (key < root.val) root.left = deleteNode(root.left, key)
  else if (key > root.val) root.right = deleteNode(root.right, key)
  else {
    if (!root.left) return root.right
    else if (!root.right) return root.left
    else {
      // const minNode = getMinNode(root.right)
      const minNode = findMinNode(root.right)
      root.val = minNode.val
      root.right = deleteNode(root.right, minNode.val)
    }
  }
  return root
}
// ans = deleteNode(ans, 4)
// console.log('deleteNode', ans)

// balance a BST
const balanceBST = root => {
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


// preorder Traversal
const preorderTraversal = root => {
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

// inorder Traversal
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

// postorder Traversal
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

// count total nodes
const countCompleteNodes = (root) => {
  if (!root) return 0

  const leftNodes = countCompleteNodes(root.left)
  const rightNodes = countCompleteNodes(root.right)

  return leftNodes + rightNodes + 1
}

// check with details
const arr = [ 3, 4, 10, 5, 9, 29, 30, 1, 12, 6, 11];
const root = insertBalanced(arr, 0, arr.length - 1);
console.log(root)

console.log('findMinNode', findMinNode(root))
console.log('findMaxNode', findMaxNode(root))
console.log('searchBST', searchBST(root, 10))

let ans = insertBST(root, 19)
console.log('insertBST', ans)
ans = deleteNode(ans, 1)
console.log('deleteNode', ans)

console.log('balanceBST', balanceBST(ans))

console.log(convertToArray(ans))

// orders
console.log('preorderTraversal',  preorderTraversal(ans))
console.log('inorderTraversal', inorderTraversal(ans))
console.log('postorderTraversal', postorderTraversal(ans))
console.log('countCompleteNodes', countCompleteNodes(ans))
