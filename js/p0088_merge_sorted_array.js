/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * @link https://leetcode.com/problems/merge-sorted-array/
 */
var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {
        const num1 = nums1[i];
        const num2 = nums2[j];

        if (i >= 0 && num1 >= num2) {
            nums1[k] = num1;
            i--;
        } else {
            nums1[k] = num2;
            j--;
        }

        k--;
    }
};
