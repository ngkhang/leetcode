/**
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.com/problems/neither-minimum-nor-maximum/
 */
var findNonMinOrMax = function (nums) {
    if (nums.length < 3) return -1;

    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    for (const num of nums) {
        if (max < num) max = num;
        if (min > num) min = num;
    }

    for (const num of nums) {
        if (num > min && num < max) return num;
    }

    return -1;
};
