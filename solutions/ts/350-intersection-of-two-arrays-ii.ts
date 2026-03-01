/**
 * @link https://leetcode.com/problems/intersection-of-two-arrays-ii/
 */
export function intersect(nums1: number[], nums2: number[]): number[] {
    const hashMap = new Map<number, number>();

    nums1.forEach((num) => {
        const val = (hashMap.get(num) ?? 0) + 1;
        hashMap.set(num, val);
    });

    return nums2.filter((num) => {
        const count = hashMap.get(num);

        if (count) {
            hashMap.set(num, count - 1);
            return true;
        }
    })
};
