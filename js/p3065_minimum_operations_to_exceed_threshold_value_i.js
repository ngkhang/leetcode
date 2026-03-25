/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * @link https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/
 */
var minOperations = function (nums, k) {
    let countOperation = 0;

    nums.forEach((num) => num < k && countOperation++);
    return countOperation;
};
