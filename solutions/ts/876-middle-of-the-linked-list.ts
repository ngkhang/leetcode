/**
 * @link https://leetcode.com/problems/middle-of-the-linked-list/
 */
export function middleNode(head: ListNode | null): ListNode | null {
    // // Approach 1:
    // let curr = head;
    // let size = 0;
    // while (curr) {
    //     size++;
    //     curr = curr.next;
    // }

    // let middleNode = head;
    // let step = 0;
    // while (middleNode) {
    //     if (step === Math.floor(size / 2)) break;

    //     middleNode = middleNode.next;
    //     step++;
    // }

    // return middleNode;

    // Approach 2:
    let p1 = head;
    let p2 = p1;

    while (p1 && p2 && p2.next) {
        p1 = p1.next;
        p2 = p2.next.next;
    }

    return p1;
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
