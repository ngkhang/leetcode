/**
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.com/problems/single-number/
 */
var singleNumber = function (nums) {
    return nums.reduce((result, num) => (result ^= num), 0);
};
