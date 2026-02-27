/**
 * @param {ListNode} head
 * @return {ListNode}
 * @link https://leetcode.com/problems/reverse-linked-list/
 */
var reverseList = function (head) {
    let reversePoint = null;
    let curr = head;

    while (curr) {
        const nextNode = curr.next;
        curr.next = reversePoint;
        reversePoint = curr;
        curr = nextNode;
    }

    return reversePoint;
};

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
