/**
 * @link https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 */
export function strStr(haystack: string, needle: string): number {
	const result = haystack.match(needle);

	if (!result || result.index === undefined) return -1;
	return result.index;
}
