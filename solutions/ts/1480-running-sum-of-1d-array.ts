/**
 * @link https://leetcode.com/problems/running-sum-of-1d-array/
 */
export function runningSum(nums: number[]): number[] {
    let preTotal = 0;

    return nums.map((num) => {
        const total = preTotal + num;
        preTotal = total;
        return total;
    })
};
