/**
 * @param {string} s
 * @return {number}
 *
 * @link https://leetcode.com/problems/roman-to-integer/
 */
var romanToInt = function (s) {
	let result = 0;

	const map = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	for (let i = 0; i < s.length; i++) {
		const currVal = map[s[i]];
		const nextVal = map[s[i + 1]];

		if (nextVal && currVal < nextVal) result -= currVal;
		else result += currVal;
	}
	return result;
};
