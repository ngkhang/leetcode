/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 * @link https://leetcode.com/problems/valid-anagram/
 */
var isAnagram = function (s, t) {
	if (s.length !== t.length) return false;

	const mapString = new Map();

	for (let i = 0; i < s.length; i++) {
		const charS = s[i];
		const charT = t[i];

		const countCharS = mapString.get(charS) || 0;
		mapString.set(charS, countCharS ? countCharS + 1 : 1);

		const countCharT = mapString.get(charT) || 0;
		mapString.set(charT, countCharT ? countCharT - 1 : -1);
	}

	for (const [_, value] of mapString) {
		if (value !== 0) return false;
	}
	return true;
};
