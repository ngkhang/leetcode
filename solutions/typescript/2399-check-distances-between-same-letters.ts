/**
 * @link https://leetcode.com/problems/check-distances-between-same-letters/
 */
export function checkDistances(s: string, distance: number[]): boolean {
	const FIRST_CHAR_CODE = "a".charCodeAt(0);
	const charToIndicesMap = new Map<string, number[]>();

	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		const existingIndices = charToIndicesMap.get(char);

		if (existingIndices === undefined) charToIndicesMap.set(char, [i]);
		else charToIndicesMap.set(char, [...existingIndices, i]);
	}

	for (const [char, indexes] of charToIndicesMap) {
		const charCode = char.charCodeAt(0) - FIRST_CHAR_CODE;
		const actualDistance = indexes[1] - indexes[0] - 1;
		const expectedDistance = distance[charCode];

		if (actualDistance !== expectedDistance) return false;
	}

	return true;
}
