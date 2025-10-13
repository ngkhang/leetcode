/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 *
 * @link https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/
 */
var minOperations = function (nums, k) {
	for (const num of nums) {
		if (num < k) count++;
	}

	return count;
};
