/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
	const map = new Map();
	const result = [];

	const words = `${s1} ${s2}`.split(" ");
	for (const word of words) {
		map.set(word, (map.get(word) || 0) + 1);
	}

	map.forEach((value, word) => value === 1 && result.push(word));
	return result;
};
