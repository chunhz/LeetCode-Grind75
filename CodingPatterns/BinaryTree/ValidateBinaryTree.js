/* 
Write a function that takes in a potentially invalid Binary Search Tree
      (BST) and returns a boolean representing whether the BST is valid.
   
      Each BST  node has an integer value , a
      left  child node, and a right  child node. A node
      is said to be a valid BST  node if and only if it satisfies
      the BST property: its value  is strictly greater than the
      values of every node to its left; its value  is less than or
      equal to the values of every node to its right; and its children nodes are
      either valid
      BST  node themselves or None / null.
    
      A BST is valid if and only if all of its nodes are valid
      
      Sample Output
        10
       /  \ 
      5     15 
     / \    / \
    2   5 13  22 
   /        \ 
  1         14
*/
// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  // Write your code here.
  // validating a binary tree, left child must < than parent, right child must greater than parent
  // take current tree node and compare it's left and right
  // if false, return false, else keep traversing the tree
  return helper(tree, -Infinity, Infinity);
}

const helper = (tree, smallest, largest) => {
  if (!tree) return true;
  if (tree.value < smallest || tree.value >= largest) return false;
  return (
    helper(tree.left, smallest, tree.value) &&
    helper(tree.right, tree.value, largest)
  );
};

// Do not edit the line below.
exports.BST = BST;
exports.validateBst = validateBst;
