/**
 * @param {number[]} nums
 * @return {number[]}
 * @link https://leetcode.com/problems/running-sum-of-1d-array/
 */
var runningSum = function (nums) {
    let preTotal = 0;

    return nums.map((num) => {
        const total = preTotal + num;
        preTotal = total;
        return total;
    });
};
