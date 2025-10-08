/**
 * @param {number[]} nums
 * @return {number}
 *
 * @link https://leetcode.com/problems/missing-number/
 */
var missingNumber = function (nums) {
	const size = nums.length;

	const totalExpect = (size * (size + 1)) / 2;
	const currTotal = nums.reduce((total, num) => (total += num), 0);

	return totalExpect - currTotal;
};
