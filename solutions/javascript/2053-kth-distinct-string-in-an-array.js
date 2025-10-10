/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 *
 * @link https://leetcode.com/problems/kth-distinct-string-in-an-array/
 */
var kthDistinct = function (arr, k) {
	let step = 1;
	const map = new Map();

	for (const str of arr) {
		const count = (map.get(str) || 0) + 1;
		map.set(str, count);
	}

	for (const [key, value] of map) {
		if (value !== 1) continue;

		if (step === k) return key;

		step++;
	}

	return "";
};
