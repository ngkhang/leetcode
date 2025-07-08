/**
 * https://leetcode.com/problems/single-number/
 */
export function singleNumber(nums: number[]): number {
	if (nums.length === 1) return nums[0];

	const mapNum = new Map<number, number>();

	for (let i = 0; i < nums.length; i++) {
		let count = mapNum.get(nums[i]);

		if (count) mapNum.set(nums[i], count + 1);
		else mapNum.set(nums[i], 1);
	}

	const arr = [...mapNum.entries()];

	for (const [num, count] of arr) {
		if (count === 1) return num;
	}

	return arr[0][0]; // Default to safe-type
}
