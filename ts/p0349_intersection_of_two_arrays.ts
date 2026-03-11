/**
 * @link https://leetcode.com/problems/intersection-of-two-arrays/
 */
function intersection(nums1: number[], nums2: number[]): number[] {
    if (!nums1 || !nums1.length || !nums2 || !nums2.length) return [];

    const res: number[] = [];
    const set = new Set<number>(nums1);

    nums2.forEach((num) => {
        if (set.has(num)) {
            res.push(num);
            set.delete(num);
        }
    });

    return res;
}

export {};
