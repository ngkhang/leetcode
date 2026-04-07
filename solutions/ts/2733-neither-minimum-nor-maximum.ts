/**
 * @link https://leetcode.com/problems/neither-minimum-nor-maximum/
 */
export function findNonMinOrMax(nums: number[]): number {
    if (nums.length === 2) return -1;

    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;

    nums.forEach((num) => {
        min = Math.min(num, min);
        max = Math.max(num, max);
    });

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (min < num && num < max) return num;
    }
    return -1;
}
