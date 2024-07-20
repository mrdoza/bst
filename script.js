//binary search tree

//create a node
class Node {
  constructor(d) {
    this.data = d;
    this.left = null;
    this.right = null;
  }
}

let root = null;

/* A function that constructs Balanced Binary Search Tree  
 from a sorted array */
function sortedArrayToBST(arr, start, end) {
  /* Base Case */
  if (start > end) {
    return null;
  }
  /* Get the middle element and make it root */
  var mid = parseInt((start + end) / 2);
  var node = new Node(arr[mid]);
  /* Recursively construct the left subtree and make it 
     left child of root */
  node.left = sortedArrayToBST(arr, start, mid - 1);
  /* Recursively construct the right subtree and make it 
     right child of root */
  node.right = sortedArrayToBST(arr, mid + 1, end);
  return node;
}
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};


let arr = [1, 2, 3, 4, 5, 6, 7];
let n = arr.length;
root = sortedArrayToBST(arr, 0, n - 1);
prettyPrint(root);

