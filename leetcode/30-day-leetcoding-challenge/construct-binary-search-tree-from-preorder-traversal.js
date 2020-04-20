/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  return buildTree(preorder, 0, preorder.length - 1);
};

function buildTree(preorder, start, end) {
  if (start === end) {
    return new TreeNode(preorder[start]);
  } else if (start > end) {
    return null;
  }

  const node = new TreeNode(preorder[start]);

  let pivot = -1;
  for (let i = start + 1; i <= end; i++) {
    if (node.val < preorder[i]) {
      pivot = i;
      break;
    }
  }

  const leftStart = start + 1;
  const leftEnd = pivot !== -1 ? pivot - 1 : end;
  node.left = buildTree(preorder, leftStart, leftEnd);

  const rightStart = pivot !== -1 ? pivot : end + 1;
  const rightEnd = end;
  node.right = buildTree(preorder, rightStart, rightEnd);

  return node;
}

console.log(bstFromPreorder([8, 5, 1, 7, 10, 12]));
console.log(bstFromPreorder([4, 2]));
