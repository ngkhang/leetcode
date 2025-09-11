/**
 * @link https://leetcode.com/problems/first-letter-to-appear-twice/
 */
export function repeatedCharacter(s: string): string {
	let firstCharacterRepeat = "";
	const strCountMap = new Map<string, number>();

	for (const char of s) {
		const isExistChar = strCountMap.has(char);

		if (isExistChar) {
			firstCharacterRepeat = char;
			break;
		}

		strCountMap.set(char, 1);
	}

	return firstCharacterRepeat;
}
