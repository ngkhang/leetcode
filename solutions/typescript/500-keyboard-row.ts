/**
 * @link https://leetcode.com/problems/keyboard-row/
 */
export function findWords(words: string[]): string[] {
	const result: string[] = [];

	const keyMaps = new Map<string, number>([
		["q", 1],
		["w", 1],
		["e", 1],
		["r", 1],
		["t", 1],
		["y", 1],
		["u", 1],
		["i", 1],
		["o", 1],
		["p", 1],

		["a", 2],
		["s", 2],
		["d", 2],
		["f", 2],
		["g", 2],
		["h", 2],
		["j", 2],
		["k", 2],
		["l", 2],

		["z", 3],
		["x", 3],
		["c", 3],
		["v", 3],
		["b", 3],
		["n", 3],
		["m", 3],
	]);

	for (const word of words) {
		const wordFormatted = word.toLowerCase();
		const lineNumber = keyMaps.get(wordFormatted[0]);
		let isSameLine = true;

		for (let i = 1; i < wordFormatted.length; i++) {
			const lineNumberChar = keyMaps.get(wordFormatted[i]);

			if (lineNumber !== lineNumberChar) {
				isSameLine = false;
				break;
			}
		}

		if (isSameLine) result.push(word);
	}

	return result;
}
