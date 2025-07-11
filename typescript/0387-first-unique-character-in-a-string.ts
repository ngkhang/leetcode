/**
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 */
export function firstUniqChar(s: string): number {
	const mapString = new Map<string, { index: number; count: number }>();

	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		let isExist = mapString.get(char);

		if (typeof isExist === 'undefined')
			mapString.set(char, { index: i, count: 1 });
		else mapString.set(char, { ...isExist, count: isExist.count + 1 });
	}

	const arr = [...mapString.values()];

	for (let i = 0; i < arr.length; i++) {
		const { index, count } = arr[i];
		if (count === 1) return index;
	}

	return -1;
}
