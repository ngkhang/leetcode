/**
 * @link https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/
 */
export function minOperations(nums: number[], k: number): number {
	let count = 0;

	for (const num of nums) {
		if (num < k) count++;
	}

	return count;
}
