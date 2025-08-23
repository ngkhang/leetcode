/**
 * @link https://leetcode.com/problems/single-number-ii/
 */
export function singleNumber(nums: number[]): number {
	const TIMES_REPEAT = 3;
	const MIN_LENGTH_NUMS = 1;

	if (nums.length === MIN_LENGTH_NUMS) return nums[0];

	const mapNums = new Map<number, number>();

	for (let num of nums) {
		const count = (mapNums.get(num) || 0) + 1;

		if (count === TIMES_REPEAT) mapNums.delete(num);
		else mapNums.set(num, count);
	}

	return mapNums.keys().next().value;
}
