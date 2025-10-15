/**
 * @link https://leetcode.com/problems/length-of-last-word/
 */
export function lengthOfLastWord(s: string): number {
	const str = s.trim();
	let word = "";

	for (let i = str.length - 1; i >= 0; i--) {
		const char = str[i];

		if (char === " ") break;
		word += char;
	}

	return word.length;
}
