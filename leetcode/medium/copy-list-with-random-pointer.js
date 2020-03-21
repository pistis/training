// https://leetcode.com/problems/copy-list-with-random-pointer/
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  return arrayToLinkedList(linkedListToArray(head));
};

function arrayToLinkedList(arr) {
  const nodes = arr.map(item => {
    return new Node(item[0], null, item[1]);
  });

  let node = null;
  let prevNode = null;
  for (let i = 0; i < nodes.length; i++) {
    node = nodes[i];
    node.random = nodes[node.random] || null;
    if (prevNode) {
      prevNode.next = node;
    }
    prevNode = node;
  }

  return nodes[0];
}

function linkedListToArray(root) {
  let node = root;
  let map = new Map();
  let index = 0;
  while (node) {
    map.set(node, index++);
    node = node.next;
  }

  const nodes = map.keys();
  const arr = [];
  for (let node of nodes) {
    arr.push([
      node.val,
      !isNaN(map.get(node.random)) ? map.get(node.random) : null
    ]);
  }
  return arr;
}

const sample = arrayToLinkedList([
  [7, null],
  [13, 0],
  [11, 4],
  [10, 2],
  [1, 0]
]);

console.log("input : ", sample);
const copied = copyRandomList(sample);
console.log("output : ", copied);

equals(sample, copied);
function equals(source, dest) {
  let inputNode = source;
  let outputNode = dest;
  while (inputNode) {
    if (inputNode !== outputNode) {
      console.info("성공", inputNode.val);
    } else {
      console.info("실패", inputNode.val);
    }
    inputNode = inputNode.next;
    outputNode = outputNode.next;
  }
}
