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
 * @return {boolean}
 */
const isBalanced = function (root) {
  let ans = true;
  function dfs(root) {
    if (!root) return false;
    const left = dfs(root.left);
    const right = dfs(root.right);
    if (Math.abs(left - right) > 1) {
      ans = false;
      return;
    }
    return 1 + Math.max(left, right);
  }
  dfs(root);
  return ans;
};
/*
function checkBalanceTree(tree){
  // have two pointers, one going left, the other right.
  function helper(tree){
    if(!tree) return 0;
    const l = 1 + helper(tree.left); // tree.left // 2
    const r = 1 + helper(tree.right); // tree.right // 2
    return Math.max(l, r)
  }
	const left = helper(tree.left);
  const right = helper(tree.right);
  if(Math.abs(left - right) > 1) return false;
  return true;
*/
