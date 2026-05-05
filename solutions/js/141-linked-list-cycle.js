/**
 * @param {ListNode} head
 * @return {boolean}
 * @link https://leetcode.com/problems/linked-list-cycle/
 */
var hasCycle = function (head) {
    let slowPoint = head;
    let fastPoint = head;

    while (slowPoint && fastPoint && fastPoint.next) {
        fastPoint = fastPoint.next.next;
        slowPoint = slowPoint.next;

        if (slowPoint === fastPoint) return true;
    }

    return false;
};

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
