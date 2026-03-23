/**
 * @link https://leetcode.com/problems/middle-of-the-linked-list/
 */
function middleNode(head: ListNode | null): ListNode | null {
    if (!head) return null;
    let low: ListNode | null = head;
    let fast: ListNode | null = head;

    while (low && fast && fast.next) {
        low = low.next;
        fast = fast.next.next;
    }

    return low;
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
