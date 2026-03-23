/**
 * @param {ListNode} head
 * @return {ListNode}
 * @link https://leetcode.com/problems/middle-of-the-linked-list/
 */
var middleNode = function (head) {
    if (!head) return null;

    let low = head;
    let fast = head;

    while (low && fast && fast.next) {
        low = low.next;
        fast = fast.next.next;
    }

    return low;
};

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
