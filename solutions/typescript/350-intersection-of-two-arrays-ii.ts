/**
 * @link https://leetcode.com/problems/intersection-of-two-arrays-ii/
 */
export function intersect(nums1: number[], nums2: number[]): number[] {
	const mapNumber = new Map<number, number>();
	const arrNum: number[] = [];

	nums1.forEach((num) => {
		const count = (mapNumber.get(num) || 0) + 1;
		mapNumber.set(num, count);
	});

	nums2.forEach((num) => {
		const count = mapNumber.get(num);

		if (count !== undefined && count > 0) {
			mapNumber.set(num, count - 1);
			arrNum.push(num);
		}
	});

	return arrNum;
}
