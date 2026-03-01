/**
 * @link https://leetcode.com/problems/intersection-of-two-arrays/
 */
export function intersection(nums1: number[], nums2: number[]): number[] {
    const set1 = new Set<number>(nums1);

    return nums2.filter((num) => {
        if (set1.has(num)) {
            set1.delete(num);
            return true;
        }
        return false;
    })
};
