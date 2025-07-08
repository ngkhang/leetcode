/**
 * https://leetcode.com/problems/contains-duplicate/
 */
export function containsDuplicate(nums: number[]): boolean {
	const map = new Map<number, number>();

	for (let index = 0; index < nums.length; index++) {
		if (map.has(nums[index])) return true;

		map.set(nums[index], index);
	}

	return false;
}
