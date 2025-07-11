/**
 * https://leetcode.com/problems/first-letter-to-appear-twice/
 */
export function repeatedCharacter(s: string): string {
	const mapString = new Map<string, { first: number; second: number | null }>();

	let twiceChar: { char: string; index: number } = {
		char: '',
		index: Infinity,
	};

	for (let i = 0; i < s.length; i++) {
		let isExist = mapString.get(s[i]);

		if (!isExist) mapString.set(s[i], { first: i, second: null });
		else if (isExist.second === null) {
			mapString.set(s[i], { ...isExist, second: i });

			if (i < twiceChar.index) {
				twiceChar.char = s[i];
				twiceChar.index = i;
			}
		}
	}
	return twiceChar.char;
}
