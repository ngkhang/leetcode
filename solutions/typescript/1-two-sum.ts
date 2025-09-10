/**
 * @link https://leetcode.com/problems/two-sum/
 */
export function twoSum(nums: number[], target: number): number[] {
	const seenValues = new Map<number, number>();

	let result: number[] = [];

	for (let i = 0; i < nums.length; i++) {
		const currentNum = nums[i];
		const complementNum = target - currentNum;

		const complementIndices = seenValues.get(complementNum);

		if (complementIndices !== undefined) {
			result = [i, complementIndices];
			break;
		}
		seenValues.set(currentNum, i);
	}

	return result;
}
