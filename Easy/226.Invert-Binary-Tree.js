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
var invertTree = function (root) {
  // if root is null return root
  if (!root) return root;
  const newTree = newTreeNode();

  newTree.val = root.val;
  // mirroring the tree, which left of the original tree will now be right
  newTree.left = invertTree(root.right);
  newTree.right = invertTree(root.left);
  return newTree;
};
