/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  if (head === null) return null;

  const nodes = [];
  let cur = head;
  while (cur) {
    nodes.push(cur);
    cur = cur.next;
  }

  return nodes[parseInt(nodes.length / 2)];
};

const head = new ListNode(1, null);
head.next = new ListNode(2, null);
head.next.next = new ListNode(3, null);
head.next.next.next = new ListNode(4, null);
head.next.next.next.next = new ListNode(5, null);
console.log(middleNode(head));
