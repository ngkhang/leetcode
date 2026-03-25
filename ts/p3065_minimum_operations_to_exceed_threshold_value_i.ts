/**
 * @link https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/
 */
function minOperations(nums: number[], k: number): number {
    // Solution 1:
    return nums.reduce((count, num) => {
        if (num < k) count++;
        return count;
    }, 0);

    // Solution 2:
    // let count = 0;
    // nums.forEach((num) => num < k && count++);
    // return count;
}

export {};
