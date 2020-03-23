/**
 * https://leetcode.com/problems/delete-nodes-and-return-forest
 * Runtime: 88 ms, faster than 31.53% of JavaScript online submissions for Delete Nodes And Return Forest.
 * Memory Usage: 38.8 MB, less than 100.00% of JavaScript online submissions for Delete Nodes And Return Forest.
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
  const deleteMap = to_delete.reduce(function(map, cur) {
    map[cur] = true;
    return map;
  }, {});

  const nodes = [root];

  const queue = [root];
  while (queue.length) {
    const item = queue.shift();
    if (deleteMap[item.val]) {
      item.left && nodes.push(item.left);
      item.right && nodes.push(item.right);
    }
    if (item.left) {
      queue.push(item.left);
      if (deleteMap[item.left.val]) {
        item.left = null;
      }
    }

    if (item.right) {
      queue.push(item.right);
      if (deleteMap[item.right.val]) {
        item.right = null;
      }
    }
  }

  return nodes.filter(node => {
    return !deleteMap[node.val];
  });
};
