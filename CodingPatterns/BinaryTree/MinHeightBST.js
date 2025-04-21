/*<div class="html">
<p>
  Write a function that takes in a non-empty sorted array of distinct integers,
  constructs a BST from the integers, and returns the root of the BST.
</p>
<p>
  The function should minimize the height of the BST.
</p>
<p>
  You've been provided with a <span>BST</span> class that you'll have to use to
  construct the BST.
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
<p>
  A BST is valid if and only if all of its nodes are valid
  <span>BST</span> nodes.
</p>
<p>
  Note that the <span>BST</span> class already has an <span>insert</span> method
  which you can use if you want.
</p>
<h3>Sample Input</h3>
<pre><span class="CodeEditor-promptParameter">array</span> = [1, 2, 5, 7, 10, 13, 14, 15, 22]
</pre>
<h3>Sample Output</h3>
<pre>         10
       /     \
      2      14
    /   \   /   \
   1     5 13   15
          \       \
           7      22
<span class="CodeEditor-promptComment">// This is one example of a BST with min height</span>
<span class="CodeEditor-promptComment">// that you could create from the input array.</span>
<span class="CodeEditor-promptComment">// You could create other BSTs with min height</span>
<span class="CodeEditor-promptComment">// from the same array; for example:</span>
         10
       /     \
      5      15
    /   \   /   \
   2     7 13   22
 /           \
1            14
</pre>
</div>
*/
function minHeightBst(array) {
  // Write your code here.
  if(array.length === 0 ) return null;
  const midIndx = Math.floor(array.length/2);
  const midValue = array[midIndx];
  const tree = new BST(midValue)
  tree.left = minHeightBst(array.slice(0, midIndx))
  tree.right = minHeightBst(array.slice(midIndx+1))
  return tree;
  // Time complexity: O(n)
  // Space complexity: O(n) 
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

// Do not edit the line below.
exports.minHeightBst = minHeightBst;
