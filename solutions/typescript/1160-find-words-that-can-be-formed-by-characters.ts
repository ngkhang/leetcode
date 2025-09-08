/**
 * https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
 */
export function countCharacters(words: string[], chars: string): number {
	let sumOfLenGoodString = 0;

	const mapChars = new Map<string, number>();
	for (const char of chars) {
		const countChar = mapChars.get(char);

		if (countChar) mapChars.set(char, countChar + 1);
		else mapChars.set(char, 1);
	}

	for (const word of words) {
		const wordCount = new Map<string, number>();
		let isValid = true;

		for (const char of word) {
			const countChar = wordCount.get(char);

			if (countChar) wordCount.set(char, countChar + 1);
			else wordCount.set(char, 1);
		}

		for (const [char, count] of wordCount) {
			const availableCount = mapChars.get(char) || 0;

			if (count > availableCount) {
				isValid = false;
				break;
			}
		}

		if (isValid) sumOfLenGoodString += word.length;
	}

	return sumOfLenGoodString;
}
