/**
 * @link https://leetcode.com/problems/remove-duplicates-from-sorted-list/
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

export function deleteDuplicates(head: ListNode | null): ListNode | null {
    let curr = head;
    let temp: ListNode | null = null;

    while (curr && curr.next) {
        if (curr.next.val !== curr.val) {
            curr = curr.next;
            continue;
        }

        temp = curr.next.next;
        curr.next = temp;
    }

    return head;
};
