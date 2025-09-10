/**
 * @param {number[]} nums
 * @return {number}
 *
 * @link https://leetcode.com/problems/single-number-ii/
 */
var singleNumber = function (nums) {
    const TIMES_REPEAT = 3;
    const MIN_LENGTH_NUMS = 1;

    if (nums.length === MIN_LENGTH_NUMS) return nums[0];

    const mapNums = new Map();

    for (let num of nums) {
        const count = (mapNums.get(num) || 0) + 1;

        if (count === TIMES_REPEAT) mapNums.delete(num);
        else mapNums.set(num, count);
    }

    return mapNums.keys().next().value;
};
