/**
 * @link https://leetcode.com/problems/remove-linked-list-elements/
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

export function removeElements(head: ListNode | null, val: number): ListNode | null {
    const dummy = new ListNode(-1);
    dummy.next = head;
    let prev: ListNode | null = dummy;
    let curr = head;
    let next: ListNode | null = null;

    while (curr && prev) {
        if (curr.val === val) {
            next = curr.next;
            prev.next = next;
        } else {
            prev = prev.next;
        }
        curr = curr.next
    }

    return dummy.next;
};
