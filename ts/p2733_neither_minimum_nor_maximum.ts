/**
 * @link https://leetcode.com/problems/neither-minimum-nor-maximum/
 */
function findNonMinOrMax(nums: number[]): number {
    if (nums.length < 3) return -1;

    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;

    for (const num of nums) {
        if (max < num) max = num;
        if (min > num) min = num;
    }

    for (const num of nums) {
        if (num < max && num > min) return num;
    }

    return -1;
}

export {};
