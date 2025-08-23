/**
 * @link https://leetcode.com/problems/single-number-iii/
 */
export function singleNumber(nums: number[]): number[] {
	const TIMES_REPEAT = 2;

	if (nums.length === TIMES_REPEAT) return nums;

	const mapNums = new Map<number, number>();

	for (let num of nums) {
		const count = (mapNums.get(num) || 0) + 1;

		if (count === TIMES_REPEAT) mapNums.delete(num);
		else mapNums.set(num, count);
	}

	return [...mapNums.keys()];
}
