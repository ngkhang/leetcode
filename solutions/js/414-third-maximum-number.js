/**
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.com/problems/third-maximum-number/
 */
var thirdMax = function (nums) {
    let first = Number.NEGATIVE_INFINITY;
    let second = Number.NEGATIVE_INFINITY;
    let third = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (first === num || (second === num) | (third === num)) continue;

        if (first < num) {
            [first, second, third] = [num, first, second];
        } else if (second < num) {
            [second, third] = [num, second];
        } else if (third < num) {
            third = num;
        }
    }

    return third === Number.NEGATIVE_INFINITY ? first : third;
};
