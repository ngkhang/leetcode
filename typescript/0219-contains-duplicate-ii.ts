/**
 * https://leetcode.com/problems/contains-duplicate-ii/
 */
export function containsNearbyDuplicate(nums: number[], k: number): boolean {
	const map = new Map<number, number>();

	for (let i = 0; i < nums.length; i++) {
		const j = map.get(nums[i]);

		if (typeof j !== 'undefined' && Math.abs(i - j) <= k) {
			return true;
		}

		map.set(nums[i], i);
	}
	return false;
}
