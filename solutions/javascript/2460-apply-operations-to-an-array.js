/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * @link https://leetcode.com/problems/apply-operations-to-an-array/
 */
var applyOperations = function (nums) {
	const n = nums.length;

	for (let i = 0; i < n - 1; i++) {
		if (nums[i] === nums[i + 1]) {
			nums[i] = nums[i] * 2;
			nums[i + 1] = 0;
		}
	}

	let j = 0;
	for (let i = 0; i < n; i++) {
		if (nums[i] !== 0) {
			nums[j] = nums[i];
			j++;
		}
	}

	while (j < n) {
		nums[j] = 0;
		j++;
	}

	return nums;
};
