/**
 * @param {number[]} nums
 * @return {number[]}
 * @link https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array
 */
var findDisappearedNumbers = function (nums) {
    const result = [];
    const unique = new Set(nums);

    for (let i = 1; i <= nums.length; i++) {
        if (!unique.has(i)) result.push(i);
    }

    return result;
};
