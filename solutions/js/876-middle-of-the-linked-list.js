/**
 * @param {ListNode} head
 * @return {ListNode}
 * @link https://leetcode.com/problems/middle-of-the-linked-list/
 */
var middleNode = function (head) {
    let p1 = head;
    let p2 = head;

    while (p1 && p2 && p2.next) {
        p1 = p1.next;
        p2 = p2.next.next;
    }
    return p1;
};

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
