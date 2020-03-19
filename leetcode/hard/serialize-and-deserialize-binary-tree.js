/**
 * Runtime: 104 ms, faster than 24.32%
 * Memory Usage: 44.2 MB, less than 17.65%
 */

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
 * Decodes your encoded data to tree.
 * input : "1,2,3,null,null,4,5"
 * output
 *    1
 *   / \
 *  2   3
 *     / \
 *    4   5
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const list = data ? data.split(",").map(val => val || null) : [null];
  if (list[0] === null) return null;
  const root = new TreeNode(list[0]);

  const queue = [root];
  for (let i = 1; i < list.length; i += 2) {
    let node = null;
    node = queue.shift();

    node.left = list[i] ? new TreeNode(list[i]) : null;
    node.left && queue.push(node.left);

    node.right = list[i + 1] ? new TreeNode(list[i + 1]) : null;
    node.right && queue.push(node.right);
  }

  return root;
};

/**
 * Encodes a tree to a single string.
 * input
 *    1
 *   / \
 *  2   3
 *     / \
 *    4   5
 * output : "1,2,3,null,null,4,5"
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(node) {
  if (!node) return "";

  let serialzied = [];
  const queue = [node];

  while (queue.length) {
    const item = queue.shift();
    if (item) {
      serialzied.push(item.val);
      queue.push(item.left);
      queue.push(item.right);
    } else {
      serialzied.push(null);
    }
  }

  return serialzied
    .slice(
      serialzied.reverse().findIndex(a => {
        return /^-?[0-9]/.test(a);
      })
    )
    .reverse()
    .join(",");
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// Test
const case1Input = [1, 2, 3].join(",");
const case2Input = [1, null, 2, 3].join(",");
const case3Input = [5, 4, 7, 3, null, 2, null, -1, null, 9].join(",");
const case4Input = [1, 2, 3, null, null, 4, 5].join(",");
const case5Input = [1, -1, 2, -2].join(",");

console.assert(serialize(deserialize(case1Input)) === case1Input);
console.assert(serialize(deserialize(case2Input)) === case2Input);
console.assert(serialize(deserialize(case3Input)) === case3Input);
console.assert(serialize(deserialize(case4Input)) === case4Input);
console.assert(serialize(deserialize(case5Input)) === case5Input);
