/**
 * @link https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 */
function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) return null;

    let curr: ListNode | null = head;

    while (curr && curr.next) {
        curr.val !== curr.next.val ? (curr = curr.next) : (curr.next = curr.next.next);
    }

    return head;
}

/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export {};
