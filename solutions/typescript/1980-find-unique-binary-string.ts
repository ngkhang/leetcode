/**
 * @link https://leetcode.com/problems/find-unique-binary-string/
 */
export function findDifferentBinaryString(nums: string[]): string {
	const n = nums.length;
	const seen = new Set<number>();
	const maxRange = (1 << n) - 1; // = 2^n - 1
	let result = "";

	for (const bin of nums) {
		seen.add(parseInt(bin, 2));
	}

	for (let i = 0; i <= maxRange; i++) {
		if (!seen.has(i)) {
			result = i.toString(2);
			break;
		}
	}

	return result.padStart(n, "0");
}
