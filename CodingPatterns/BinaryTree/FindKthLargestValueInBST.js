/*
  Write a function that takes in a Binary Search Tree (BST) and a positive
  integer <span>k</span> and returns the kth largest integer contained in the
  BST.
</p>
<p>
  You can assume that there will only be integer values in the BST and that
  <span>k</span> is less than or equal to the number of nodes in the tree.
</p>
<p>
  Also, for the purpose of this question, duplicate integers will be treated as
  distinct values. In other words, the second largest value in a BST containing
  values <span>{5, 7, 7}</span> will be <span>7</span>—not <span>5</span>.
</p>
<p>
  Each <span>BST</span> node has an integer <span>value</span>, a
  <span>left</span> child node, and a <span>right</span> child node. A node is
  said to be a valid <span>BST</span> node if and only if it satisfies the BST
  property: its <span>value</span> is strictly greater than the values of every
  node to its left; its <span>value</span> is less than or equal to the values
  of every node to its right; and its children nodes are either valid
  <span>BST</span> nodes themselves or <span>None</span> / <span>null</span>.
</p>
<h3>Sample Input</h3>
<pre><span class="CodeEditor-promptParameter">tree</span> =   15
       /     \
      5      20
    /   \   /   \
   2     5 17   22
 /   \         
1     3       

*/
// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
  // Write your code here.
  // input: BST, k
  // output: kth largest value
  // traverse the tree in reverse order
  // keep track of the count of nodes visited
  // if count is equal to k, return the value
  let answer = -1;
  answer = kthLargestHelper(tree, k, count = 0);
  return answer;
}
const kthLargestHelper = (node, k, count) => { 
  // base case
  if(node === null) return -1;
  // traverse the right subtree first
  let right = kthLargestHelper(node.right, k, count);
  if (right !== -1) return right; 
  // increment count
  count++;
  // if count is equal to k, return the value
  if (count === k) return node.value;
  // traverse the left subtree
  let left = kthLargestHelper(node.left, k, count);
  if (left !== -1) return left;


  return -1;  
  // Time complexity: O(n)
  // Space complexity: O(h) where h is the height of the tree



  
}

// Do not edit the lines below.
exports.BST = BST;
exports.findKthLargestValueInBst = findKthLargestValueInBst;
