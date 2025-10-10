/**
 * @link https://leetcode.com/problems/kth-distinct-string-in-an-array/
 */
export function kthDistinct(arr: string[], k: number): string {
	let result = "";
	let step = 1;
	const map = new Map<string, number>();

	for (const str of arr) {
		const count = (map.get(str) || 0) + 1;
		map.set(str, count);
	}

	for (const [key, value] of map) {
		if (value !== 1) continue;

		if (step === k) {
			result = key;
			break;
		}
		step++;
	}

	return result;
}
