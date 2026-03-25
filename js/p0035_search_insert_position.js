/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @link https://leetcode.com/problems/search-insert-position/
 */
var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const num = nums[mid];

        if (num === target) return mid;

        if (num > target) right = mid - 1;
        else left = mid + 1;
    }

    return left;
};
