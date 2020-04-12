/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  if (root === null) {
    return 0;
  }
  const height = function (node, length) {
    if (node === null) {
      return 0;
    }

    const left = height(node.left, length);
    const right = height(node.right, length);
    length.value = Math.max(length.value, left + right);

    return 1 + Math.max(left, right);
  };

  const length = {
    value: 0,
  };

  height(root, length);

  return length.value;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 *        1
         / \
        2   3
       / \     
      4   5    
 */
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root));
