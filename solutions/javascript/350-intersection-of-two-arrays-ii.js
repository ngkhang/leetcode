/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 *
 * @link https://leetcode.com/problems/intersection-of-two-arrays-ii/
 */
var intersect = function (nums1, nums2) {
	const mapNumber = new Map();
	const result = [];

	nums1.forEach((num) => {
		const count = (mapNumber.get(num) || 0) + 1;
		mapNumber.set(num, count);
	});

	nums2.forEach((num) => {
		const count = mapNumber.get(num);

		if (count !== undefined && count > 0) {
			mapNumber.set(num, count - 1);
			result.push(num);
		}
	});

	return result;
};
