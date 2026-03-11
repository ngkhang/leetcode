/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * @link https://leetcode.com/problems/intersection-of-two-arrays-ii/
 */
var intersect = function (nums1, nums2) {
    const res = [];

    const map = new Map();

    for (let i = 0; i < nums1.length; i++) {
        const num = nums1[i];
        const count = (map.get(num) || 0) + 1;

        map.set(num, count);
    }

    for (let i = 0; i < nums2.length; i++) {
        const num = nums2[i];
        const cache = map.get(num);
        if (cache >= 1) {
            res.push(num);
            map.set(num, cache - 1);
        }
    }

    return res;
};
