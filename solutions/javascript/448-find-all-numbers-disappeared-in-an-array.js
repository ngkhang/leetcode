/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * @link https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 */
var findDisappearedNumbers = function (nums) {
	const n = nums.length;
	const currentNum = new Set(nums);
	const result = [];

	for (let i = 1; i <= n; i++) {
		if (!currentNum.has(i)) result.push(i);
	}

	return result;
};
