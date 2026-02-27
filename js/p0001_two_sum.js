/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @link https://leetcode.com/problems/two-sum/
 */
var twoSum = function (nums, target) {
    const numObj = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const i2 = numObj[target - num];

        if (i2 >= 0) {
            return [i, i2];
        }

        numObj[num] = i;
    }
};
