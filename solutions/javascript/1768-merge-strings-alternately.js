/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 *
 * @link https://leetcode.com/problems/merge-strings-alternately/
 */
var mergeAlternately = function (word1, word2) {
	const maxLen = Math.max(word1.length, word2.length);

	let mergeStr = "";

	for (let i = 0; i < maxLen; i++) {
		if (i < word1.length) mergeStr += word1[i];
		if (i < word2.length) mergeStr += word2[i];
	}

	return mergeStr;
};
