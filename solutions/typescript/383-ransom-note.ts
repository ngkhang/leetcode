/**
 * https://leetcode.com/problems/ransom-note/
 */
export function canConstruct(ransomNote: string, magazine: string): boolean {
	const magazineCount = new Map<string, number>();

	for (const char of magazine) {
		magazineCount.set(char, (magazineCount.get(char) || 0) + 1);
	}

	for (const char of ransomNote) {
		const count = magazineCount.get(char);

		if (count) magazineCount.set(char, count - 1);
		else return false;
	}

	return true;
}
