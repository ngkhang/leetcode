/**
 * @link https://leetcode.com/problems/intersection-of-two-arrays/
 */
export function intersection(nums1: number[], nums2: number[]): number[] {
	const intersection: number[] = [];

	const set1 = new Set<number>(nums1);
	const set2 = new Set<number>(nums2);

	set1.forEach((num) => {
		if (set2.has(num)) intersection.push(num);
	});

	return intersection;
}
