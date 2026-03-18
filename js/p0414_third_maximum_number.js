/**
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.com/problems/third-maximum-number/
 */
var thirdMax = function (nums) {
    let first = Number.MIN_SAFE_INTEGER;
    let second = Number.MIN_SAFE_INTEGER;
    let third = Number.MIN_SAFE_INTEGER;

    for (const num of nums) {
        if (first === num || second === num || third === num) continue;

        if (first < num) {
            third = second;
            second = first;
            first = num;
            continue;
        }

        if (second < num) {
            third = second;
            second = num;
            continue;
        }

        if (third < num) third = num;
    }

    return third !== Number.MIN_SAFE_INTEGER ? third : first;
};
