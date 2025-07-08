/**
 * https://leetcode.com/problems/search-insert-position/
 */
// TODO: Expect O(log n) but current is O(n)
export function searchInsert(nums: number[], target: number): number {
	const sizeNums = nums.length;

	if (nums[0] >= target) return 0;

	for (let index = 1; index < nums.length; index++) {
		if (nums[index] >= target) return index;
	}

	return sizeNums;
}
