/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * @link https://leetcode.com/problems/intersection-of-two-arrays-ii/
 */
var intersect = function (nums1, nums2) {
    const result = [];

    const nums1Sorted = nums1.sort((a, b) => a - b);
    const nums2Sorted = nums2.sort((a, b) => a - b);

    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        const num1 = nums1Sorted[i];
        const num2 = nums2Sorted[j];

        if (num1 > num2) {
            j++;
        } else if (num1 < num2) {
            i++;
        } else {
            result.push(num1);
            i++;
            j++;
        }
    }

    return result;
};
