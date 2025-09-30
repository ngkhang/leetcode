/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 *
 * @link https://leetcode.com/problems/find-the-difference/
 */
var findTheDifference = function (s, t) {
	if (s.length === 0) return t;

	const mapS = new Map();

	for (const char of s) {
		const count = (mapS.get(char) || 0) + 1;
		mapS.set(char, count);
	}

	for (const char of t) {
		const count = mapS.get(char);

		if (!count) {
			return char;
		}

		mapS.set(char, count - 1);
	}
};
