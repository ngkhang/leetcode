/**
 * @link https://leetcode.com/problems/longest-common-prefix/
 */
export function longestCommonPrefix(strs: string[]): string {
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

	return commonPrefix;
}
