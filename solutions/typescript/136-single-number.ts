/**
 * @link https://leetcode.com/problems/single-number/
 */
export function singleNumber(nums: number[]): number {
	if (nums.length === 1) return nums[0];

	const mapNums = new Map<number, number>();

	for (let num of nums) {
		const count = mapNums.get(num) ?? 0;
		mapNums.set(num, count + 1);
	}

	for (let [key, value] of mapNums) {
		if (value === 1) return key;
	}

	/**
	 * Fix error of TypScript: Function lacks ending return statement
	 * It doesn't impact the algorithm
	 */
	throw new Error("No single number found");
}
