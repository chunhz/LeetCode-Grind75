/*
  Write a function that takes in a Binary Search Tree (BST) and a target integer value and returns the closest value to that target value contained in the BST. 

          10
       /     \
      5      15
    /   \   /   \
   2     5 13   22
 /           \
1            14
 
 target = 12

 */
function findClosestValueInBst(tree, target) {
  // Write your code here.
  let closest = Infinity;
  let currentNode = tree;

  while (currentNode !== null) {
    const currentValue = currentNode.value;
    if (Math.abs(target - closest) > Math.abs(target - currentValue)) {
      closest = currentValue;
    }

    if (target < currentValue) {
      currentNode = currentNode.left;
    } else if (target > currentValue) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }

  return closest;
}
function findClosestValueInBst1(tree, target) {
  // Write your code here.
  return findClosestValueInBstHelper(tree, target, Infinity);
}
const findClosestValueInBstHelper = (tree, target, closest) => {
  if (!tree) return closest;
  if (Math.abs(target - closest) >= Math.abs(target - tree.value))
    closest = tree.value;
  if (target < tree.value)
    return findClosestValueInBstHelper(tree.left, target, closest);
  else if (target > tree.value)
    return findClosestValueInBstHelper(tree.right, target, closest);
  else return closest;
};

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
