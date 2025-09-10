/**
 * @param {number[]} nums
 * @return {number}
 *
 * @link https://leetcode.com/problems/single-number/
 */
var singleNumber = function (nums) {
    if (nums.length === 1) return nums[0];

    const mapNums = new Map();

    for (let num of nums) {
        const count = mapNums.get(num) ?? 0;
        mapNums.set(num, count + 1);
    }

    for (let [key, value] of mapNums) {
        if (value === 1) return key;
    }
};
