/**
 * @link https://leetcode.com/problems/single-number/
 */
export function singleNumber(nums: number[]): number {
    /*
        Bit-Manipulation: using XOR
            0 ^ 0 = 0
            1 ^ 1 = 0
            1 ^ 0 = 1
            0 ^ 1 = 1
     */

    let result = 0;
    nums.forEach((num) => {
        result = result ^ num;
    });

    return result;
}
