/**
 * @param {string[]} strs
 * @return {string}
 *
 * @link https://leetcode.com/problems/longest-common-prefix/
 */
var longestCommonPrefix = function (strs) {
	let commonPrefix = "";
	const baseStr = strs[0];

	for (let i = 0; i < baseStr.length; i++) {
		for (let j = 1; j < strs.length; j++) {
			if (strs[j][i] !== baseStr[i]) {
				return commonPrefix;
			}
		}

		commonPrefix += baseStr[i];
	}
};
