/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * @link https://leetcode.com/problems/intersection-of-two-arrays/
 */
var intersection = function (nums1, nums2) {
    const set1 = new Set(nums1);

    return nums2.filter((num) => {
        if (set1.has(num)) {
            set1.delete(num);
            return true;
        }
    });
};
