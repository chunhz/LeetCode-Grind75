/*

  Write a BST class for a Binary Search Tree. The class should
  support:

  Inserting values with the insert method

    Removing values with the remove method; this method should
    only remove the first instance of a given value.

  <li>Searching for values with the contains method.</li>
</ul>
<p>
  Note that you can't remove values from a single-node tree. In other words,
  calling the remove method on a single-node tree should simply not
  do anything.
</p>
<p>
  Each BST node has an integer value, a
  left child node, and a right child node. A node is
  said to be a valid BST node if and only if it satisfies the BST
  property: its value is strictly greater than the values of every
  node to its left; its value is less than or equal to the values
  of every node to its right; and its children nodes are either valid
  BST nodes themselves or None / null.
</p>
<h3>Sample Usage</h3>
<pre> Assume the following BST has already been created:
         10
       /     \
      5      15
    /   \   /   \
   2     5 13   22
 /           \
1            14

 All operations below are performed sequentially.
insert(12):   10
            /     \
           5      15
         /   \   /   \
        2     5 13   22
      /        /  \
     1        12  14

remove(10):   12
            /     \
           5      15
         /   \   /   \
        2     5 13   22
      /           \
     1            14

contains(15): true
*/
// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // Write your code here.
    let currentNode = this;
    while (currentNode) {
      // checking for value in the tree
      if (value < currentNode.value) {
        if (!currentNode.left) {
          // insert to left is smaller than currentNode.left
          currentNode.left = new BST(value);
          break;
        } else currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = new BST(value);
          break;
        } else currentNode = currentNode.right;
      }
    }
    // Do not edit the return statement of this method.
    return this;
  }
  insertRecursion(value) {
    // Write your code here.
    if (value < this.value) {
      if (!this.left) this.left = new BST(value);
      else return this.left.insertRecursion(value);
    } else {
      if (!this.right) {
        this.right = new BST(value);
      } else return this.right.insertRecursion(value);
    }
    // Do not edit the return statement of this method.
    return this;
  }

  contains(value) {
    // Write your code here.
    if (value === this.value) return true;
    else if (value < this.value) {
      if (!this.left) return false;
      else return this.left.contains(value);
    } else {
      if (!this.right) return false;
      else return this.right.contains(value);
    }
  }

  remove(value) {
    // Write your code here.
    if (value < this.value) {
      if (this.left) {
        this.left = this.left.remove(value);
      } else if (this.left && this.left.value === value) {
        this.left = null;
      }
    } else {
    }
    // Do not edit the return statement of this method.
    return this;
  }
  getMinValue() {
    let currentNode = this;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
}

// Do not edit the line below.
exports.BST = BST;
