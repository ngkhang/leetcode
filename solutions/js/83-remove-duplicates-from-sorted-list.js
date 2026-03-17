/**
 * @link https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 */
/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let curr = head;
    let temp = null;

    while (curr && curr.next) {
        if (curr.next.val === curr.val) {
            temp = curr.next.next;
            curr.next = temp;
        } else {
            curr = curr.next;
        }
    }

    return head;
};
