/**
 * @link https://leetcode.com/problems/merge-strings-alternately/
 */
export function mergeAlternately(word1: string, word2: string): string {
	const maxLen = Math.max(word1.length, word2.length);

	let mergeStr = "";

	for (let i = 0; i < maxLen; i++) {
		if (i < word1.length) mergeStr += word1[i];
		if (i < word2.length) mergeStr += word2[i];
	}

	return mergeStr;
}
