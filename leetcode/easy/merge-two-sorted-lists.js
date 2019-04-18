// https://leetcode.com/problems/merge-two-sorted-lists/
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let emptyHead = new ListNode(null)
    let tail = emptyHead
    while(true) {
        if (l1 && l2) {
            if (l1.val <= l2.val) {
                tail.next = l1
                tail = l1
                l1 = l1.next
            } else {
                tail.next = l2
                tail = l2
                l2 = l2.next
            }
        } else if (l1) {
            tail.next = l1
            tail = l1
            l1 = l1.next
        } else if (l2) {
            tail.next = l2
            tail = l2
            l2 = l2.next
        }

        if (!l1 && !l2) break
    }

    return emptyHead.next
};

// below is test code
let createLinkedList = function(nums) {
    let head, tail
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        var node = new ListNode(num)
        
        if (tail) {
            tail.next = node
            tail = node
        } else {
            tail = node
        }

        if (!head) {
            head = node
        }
    }
    return head
}

let printLinkedList = function(node) {
    while(node) {
        console.log(node.val)
        node = node.next
    }
}

// printLinkedList(mergeTwoLists(createLinkedList([1,2,4]), createLinkedList([1,3,4])))
// printLinkedList(mergeTwoLists(createLinkedList([2]), createLinkedList([1])))
// printLinkedList(mergeTwoLists(createLinkedList([-10,-10,-9,-4,1,6,6]), createLinkedList([-7])))