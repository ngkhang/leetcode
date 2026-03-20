/**
 * @param {ListNode} head
 * @return {ListNode}
 * @link https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 */
var deleteDuplicates = function (head) {
    let curr = head;
    let temp = null;

    while (curr && curr.next) {
        if (curr.val === curr.next.val) {
            temp = curr.next.next;
            curr.next = temp;
        } else curr = curr.next;
    }

    return head;
};

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
