/**
 * @link https://leetcode.com/problems/single-number/
 */
function singleNumber(nums: number[]): number {
    return nums.reduce((result, num) => (result ^= num), 0);
}

export {};
