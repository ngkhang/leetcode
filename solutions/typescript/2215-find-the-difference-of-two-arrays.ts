/**
 * @link https://leetcode.com/problems/find-the-difference-of-two-arrays/
 */
export function findDifference(nums1: number[], nums2: number[]): number[][] {
	const result: number[][] = [[], []];

	const set1 = new Set(nums1);
	const set2 = new Set(nums2);

	set1.forEach((num) => {
		if (!set2.has(num)) result[0].push(num);
	});
	set2.forEach((num) => {
		if (!set1.has(num)) result[1].push(num);
	});

	return result;
}
