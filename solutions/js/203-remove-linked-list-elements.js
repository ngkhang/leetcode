/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * @link https://leetcode.com/problems/remove-linked-list-elements/
 */
var removeElements = function (head, val) {
    const dummy = new ListNode(-1);
    dummy.next = head;

    let prevN = dummy;
    let currN = head;
    let nextN = null;

    while (currN && prevN) {
        if (currN.val === val) {
            nextN = currN.next;
            prevN.next = nextN;
        } else {
            prevN = prevN.next;
        }

        currN = currN.next;
    }

    return dummy.next;
};
