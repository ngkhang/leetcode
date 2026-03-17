/**
 * @link https://leetcode.com/problems/merge-two-sorted-lists/
 */
/**
 * Definition for singly-linked list.
*/
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummy = new ListNode(-1);
    let curr = dummy;

    while (list1 !== null && list2 !== null) {

        if (list1.val <= list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }

        curr = curr.next;
    }

    curr.next = (list1 === null) ? list2 : list1;
    return dummy.next;
};
