/**
 * @link https://leetcode.com/problems/uncommon-words-from-two-sentences/
 */
export function uncommonFromSentences(s1: string, s2: string): string[] {
	const words = `${s1} ${s2}`.split(" ");

	const map = new Map<string, number>();
	const result: string[] = [];

	for (const word of words) {
		map.set(word, (map.get(word) || 0) + 1);
	}

	map.forEach((value, word) => value === 1 && result.push(word));
	return result;
}
