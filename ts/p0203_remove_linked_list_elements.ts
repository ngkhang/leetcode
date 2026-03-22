/**
 * @link https://leetcode.com/problems/remove-linked-list-elements/
 */
function removeElements(head: ListNode | null, val: number): ListNode | null {
    if (!head) return null;

    const dummy = new ListNode(-1, head);

    let prevNode: ListNode | null = dummy;
    let currNode: ListNode | null = head;
    let nextNode: ListNode | null = null;

    while (currNode && prevNode) {
        if (currNode.val === val) {
            nextNode = currNode.next;
            prevNode.next = nextNode;
        } else prevNode = prevNode.next;

        currNode = currNode.next;
    }
    return dummy.next;
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
