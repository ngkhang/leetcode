/**
 * @link https://leetcode.com/problems/reverse-linked-list/
 */
function reverseList(head: ListNode | null): ListNode | null {
    let reversedPoint: ListNode | null = null;

    let curr = head;

    while (curr) {
        const nextNode = curr.next;

        curr.next = reversedPoint;
        reversedPoint = curr;
        curr = nextNode;
    }

    return reversedPoint;
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
