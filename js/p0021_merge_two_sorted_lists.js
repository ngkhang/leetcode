/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * @link https://leetcode.com/problems/merge-two-sorted-lists/
 */
var mergeTwoLists = function (list1, list2) {
    const listMerge = new ListNode(Number.MAX_SAFE_INTEGER);
    let curr = listMerge;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }

        curr = curr.next;
    }

    curr.next = list1 !== null ? list1 : list2;

    return listMerge.next;
};

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
