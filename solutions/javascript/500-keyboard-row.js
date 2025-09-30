/**
 * @param {string[]} words
 * @return {string[]}
 *
 * @link https://leetcode.com/problems/keyboard-row/
 */
var findWords = function (words) {
	const keyMaps = new Map([
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

	return words.filter((word) => {
		const wordFormatted = word.toLowerCase();
		const firstLineNumber = keyMaps.get(wordFormatted[0]);

		for (let i = 1; i < wordFormatted.length; i++) {
			const lineNumber = keyMaps.get(wordFormatted[i]);

			if (firstLineNumber !== lineNumber) return false;
		}
		return true;
	});
};
