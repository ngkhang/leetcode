/**
 * @param {string[]} nums
 * @return {string}
 *
 * @link https://leetcode.com/problems/find-unique-binary-string/
 */
var findDifferentBinaryString = function (nums) {
	const n = nums.length;
	const seen = new Set();
	const maxRange = (1 << n) - 1; // = 2^n - 1

	for (const bin of nums) {
		seen.add(parseInt(bin, 2));
	}

	for (let i = 0; i <= maxRange; i++) {
		if (!seen.has(i)) return i.toString(2).padStart(n, "0");
	}
};
