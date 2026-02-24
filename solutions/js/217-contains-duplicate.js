/**
 * @param {number[]} nums
 * @return {boolean}
 * @link https://leetcode.com/problems/contains-duplicate/
 */
var containsDuplicate = function (nums) {
    const set = new Set();

    for (const number of nums) {
        if (set.has(number)) return true;
        set.add(number);
    }

    return false;
};
