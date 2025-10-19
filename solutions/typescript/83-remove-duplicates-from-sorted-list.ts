/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 *
 * @link https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  let currNode = head;

  while (currNode && currNode.next !== null) {
    if (currNode.val === currNode.next.val) currNode.next = currNode.next.next;
    else currNode = currNode.next;
  }
  return head;
}
