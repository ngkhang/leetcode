/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * @link https://leetcode.com/problems/remove-linked-list-elements/
 */
var removeElements = function (head, val) {
    if (!head) return null;

    const dummy = new ListNode(-1, head);
    let prev = dummy;
    let curr = head;
    let next = null;

    while (curr && prev) {
        if (curr.val === val) {
            next = curr.next;
            prev.next = next;
        } else prev = prev.next;

        curr = curr.next;
    }

    return dummy.next;
};

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
