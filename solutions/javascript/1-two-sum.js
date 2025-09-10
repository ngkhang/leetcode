/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * @link https://leetcode.com/problems/two-sum/
 */
var twoSum = function (nums, target) {
    const seenValues = new Map();

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complementNum = target - currentNum;

        const complementIndices = seenValues.get(complementNum);

        if (complementIndices !== undefined) return [i, complementIndices];

        seenValues.set(currentNum, i);
    }
};
