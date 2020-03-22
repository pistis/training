/**
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const output = [];
  // inorderRecursive(root, value => {
  //   output.push(value);
  // });
  return inorder(root);
};

/**
 * Runtime: 60 ms, faster than 27.15% of JavaScript online submissions for Binary Tree Inorder Traversal.
 * Memory Usage: 33.6 MB, less than 100.00% of JavaScript online submissions for Binary Tree Inorder Traversal.
 * @param {*} node
 */
function inorder(node) {
  if (!node) return [];

  const output = [];
  const stack = [];
  let current = node;

  while (current !== null || stack.length) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }

    let temp = stack.pop();
    output.push(temp.val);

    current = temp.right;
  }
  return output;
}
/**
 * 재귀 버전
 * Runtime: 100 ms, faster than 5.20% of JavaScript online submissions for Binary Tree Inorder Traversal.
 * Memory Usage: 33.5 MB, less than 100.00% of JavaScript online submissions for Binary Tree Inorder Traversal.
 * @param {*} node
 * @param {*} visit
 */
function inorderRecursive(node, visit) {
  if (!node) return;
  inorderRecursive(node.left, visit);
  visit(node.val);
  inorderRecursive(node.right, visit);
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
const sample1 = new TreeNode(1);
sample1.right = new TreeNode(2);
sample1.right.left = new TreeNode(3);
const output = inorderTraversal(sample1);
console.log(output);
