/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * @link https://leetcode.com/problems/contains-duplicate/
 */
var containsDuplicate = function (nums) {
    // Approach 1: Usage Set()
    const uniqueNumber = new Set(nums);
    return uniqueNumber.size !== nums.length;

    // Approach 2: Usage Map()
    /* const mapNumbers = new Map();

    for (const num of nums) {
        if (mapNumbers.has(num)) return true;

        mapNumbers.set(num, 1);
    }
    return false; */
};
