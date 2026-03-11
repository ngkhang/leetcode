/**
 * @link https://leetcode.com/problems/intersection-of-two-arrays-ii/
 */
function intersect(nums1: number[], nums2: number[]): number[] {
    // Approach 2: Using Map()
    if (!nums1 || !nums2 || !nums1.length || !nums2.length) return [];

    const res: number[] = [];
    const map = new Map<number, number>();

    for (let i = 0; i < nums1.length; i++) {
        const num = nums1[i];
        const count = (map.get(num) || 0) + 1;
        map.set(num, count);
    }

    for (let i = 0; i < nums2.length; i++) {
        const num = nums2[i];
        const cache = map.get(num) || 0;

        if (cache >= 1) {
            map.set(num, cache - 1);
            res.push(num);
        }
    }

    return res;

    // // Approach 1: Sorted array
    // const res: number[] = [];

    // const nums1Sorted = nums1.sort((a, b) => a - b);
    // const nums2Sorted = nums2.sort((a, b) => a - b);

    // let i1 = 0;
    // let i2 = 0;

    // while (i1 < nums1Sorted.length && i2 < nums2Sorted.length) {
    //     const num1 = nums1Sorted[i1];
    //     const num2 = nums2Sorted[i2];

    //     if (num1 === num2) {
    //         res.push(num1);
    //         i1++;
    //         i2++;
    //         continue;
    //     }

    //     if (num1 < num2) i1++;
    //     else i2++;
    // }

    // return res;
}

export {};
