/**
 * @link https://leetcode.com/problems/contains-duplicate/
 */
export function containsDuplicate(nums: number[]): boolean {
	// Approach 1: Usage Set()
	const uniqueNumber = new Set<number>(nums);
	return uniqueNumber.size !== nums.length;

	// Approach 2: Usage Map()
	/* const mapNumbers = new Map<number, number>();

	for (const num of nums) {
		if (mapNumbers.has(num)) return true;

		mapNumbers.set(num, 1);
	}
	return false; */
}
