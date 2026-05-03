/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @link https://leetcode.com/problems/two-sum/
 */
var twoSum = function (nums, target) {
    const map = new Map();

    nums.forEach((num, index) => {
        map.set(target - num, index);
    });

    for (let index = 0; index < nums.length; index++) {
        const index2 = map.get(nums[index]);

        if (index2 && index2 !== index) return [index, index2];
    }

    return [0, 1]; // exactly one solution
};
