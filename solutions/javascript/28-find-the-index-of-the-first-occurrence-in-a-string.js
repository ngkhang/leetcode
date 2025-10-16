/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 *
 * @link https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 */
var strStr = function (haystack, needle) {
	const result = haystack.match(needle);

	if (!result || result.index === undefined) return -1;
	return result.index;
};
