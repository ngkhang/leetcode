/**
 * @param {number[][]} nums
 * @return {number[]}
 *
 * @link https://leetcode.com/problems/intersection-of-multiple-arrays/
 */
var intersection = function (nums) {
	const map = new Map();
	const size = nums.length;
	const result = [];

	for (const arr of nums) {
		for (const num of arr) {
			const count = (map.get(num) || 0) + 1;
			map.set(num, count);
		}
	}

	map.forEach((count, num) => {
		if (count % size === 0) result.push(num);
	});

	return result.sort((first, second) => first - second);
};
