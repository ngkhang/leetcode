/**
 * https://leetcode.com/problems/ransom-note/
 */
export function canConstruct(ransomNote: string, magazine: string): boolean {
	const mapMagazine = new Map<string, number>();

	for (const charMagazine of magazine) {
		const currentValue = mapMagazine.get(charMagazine);
		if (currentValue) mapMagazine.set(charMagazine, currentValue + 1);
		else mapMagazine.set(charMagazine, 1);
	}

	for (const charNote of ransomNote) {
		const currentValue = mapMagazine.get(charNote);
		if (currentValue) mapMagazine.set(charNote, currentValue - 1);
		else return false;
	}

	return true;
}
