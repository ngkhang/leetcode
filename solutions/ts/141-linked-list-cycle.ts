/**
 * @link https://leetcode.com/problems/linked-list-cycle/
 */
export function hasCycle(head: ListNode | null): boolean {
    let slowPoint = head;
    let fastPoint = head;

    while (slowPoint && fastPoint && fastPoint.next) {
        fastPoint = fastPoint.next.next;
        slowPoint = slowPoint.next;

        if (slowPoint === fastPoint) return true;
    }

    return false;
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
