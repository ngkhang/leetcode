/**
 * @link https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */
export function removeDuplicates(nums: number[]): number {
	const size = nums.length;
	let curr = 0;
	let next = curr + 1;

	while (next < size) {
		if (nums[curr] !== nums[next]) {
			curr++;
			nums[curr] = nums[next];
		}

		next++;
	}

	nums.splice(curr + 1, size - curr - 1);

	return nums.length;
}
