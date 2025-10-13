/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * @link https://leetcode.com/problems/search-insert-position/
 */
var searchInsert = function (nums, target) {
	let idxLow = 0;
	let idxHigh = nums.length - 1;

	while (idxLow <= idxHigh) {
		const idxMid = Math.floor((idxHigh + idxLow) / 2);
		const midVal = nums[idxMid];

		if (midVal === target) return idxMid;

		if (midVal > target) idxHigh = idxMid - 1;
		else idxLow = idxMid + 1;
	}

	return idxLow;
};
