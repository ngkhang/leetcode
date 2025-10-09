/**
 * @link https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 */
export function findDisappearedNumbers(nums: number[]): number[] {
	const n = nums.length;
	const currentNum = new Set<number>(nums);

	const result: number[] = [];

	for (let i = 1; i <= n; i++) {
		if (!currentNum.has(i)) result.push(i);
	}

	return result;
}
