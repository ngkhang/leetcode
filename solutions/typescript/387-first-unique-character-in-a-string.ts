/**
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 */
export function firstUniqChar(s: string): number {
	const mapString = new Map<string, number>();
	for (const char of s) {
		const count = mapString.get(char);

		if (count) mapString.set(char, count + 1);
		else mapString.set(char, 1);
	}

	for (let index = 0; index < s.length; index++) {
		const count = mapString.get(s[index]);
		if (count === 1) return index;
	}

	return -1;
}
