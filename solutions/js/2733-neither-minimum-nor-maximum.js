/**
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.com/problems/neither-minimum-nor-maximum/
 */
var findNonMinOrMax = function (nums) {
    if (nums.length === 2) return -1;

    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;

    nums.forEach((num) => {
        min = Math.min(min, num);
        max = Math.max(max, num);
    });

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num > min && num < max) return num;
    }

    return -1;
};
