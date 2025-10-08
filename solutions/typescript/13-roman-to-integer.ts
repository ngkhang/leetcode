/**
 * @link https://leetcode.com/problems/roman-to-integer/
 */
export function romanToInt(s: string): number {
	const map: Record<string, number> = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let result = 0;

	for (let i = 0; i < s.length; i++) {
		const currentVal = map[s[i]];
		const nextVal = map[s[i + 1]];

		result =
			nextVal && currentVal < nextVal
				? result - currentVal
				: result + currentVal;
	}
	return result;
}
