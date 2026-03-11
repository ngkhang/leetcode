/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * @link https://leetcode.com/problems/intersection-of-two-arrays/
 */
var intersection = function (nums1, nums2) {
    if (!nums1 || !nums1.length || !nums2 || !nums2.length) return [];

    const res = [];
    const set = new Set(nums1);

    nums2.forEach((num) => {
        if (set.has(num)) {
            set.delete(num);
            res.push(num);
        }
    });

    return res;
};
