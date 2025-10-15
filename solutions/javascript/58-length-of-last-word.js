/**
 * @param {string} s
 * @return {number}
 *
 * @link https://leetcode.com/problems/length-of-last-word/
 */
var lengthOfLastWord = function (s) {
	const str = s.trim();
	let word = "";

	for (let i = str.length - 1; i >= 0; i--) {
		const char = str[i];

		if (char === " ") break;
		word += char;
	}

	return word.length;
};
