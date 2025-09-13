/**
 * @link https://leetcode.com/problems/valid-anagram/
 */
export function isAnagram(s: string, t: string): boolean {
	if (s.length !== t.length) return false;

	const mapString = new Map<string, number>();

	for (let i = 0; i < s.length; i++) {
		const charS = s[i];
		const charT = t[i];

		const countCharS = mapString.get(charS);
		mapString.set(charS, countCharS !== undefined ? countCharS + 1 : 1);

		const countCharT = mapString.get(charT);
		mapString.set(charT, countCharT !== undefined ? countCharT - 1 : -1);
	}

	for (const [_, value] of mapString) {
		if (value !== 0) return false;
	}
	return true;
}
