/**
 * @link https://leetcode.com/problems/third-maximum-number/
 */
export function thirdMax(nums: number[]): number {
    let first = Number.MIN_SAFE_INTEGER;
    let second = Number.MIN_SAFE_INTEGER;
    let third = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (first === num || second === num || third === num) continue;

        if (first < num) {
            [first, second, third] = [num, first, second];
        } else if (second < num) {
            [second, third] = [num, second];
        } else if (third < num) {
            third = num;
        }
    }

    return (third = Number.MIN_SAFE_INTEGER ? first : third);
}
