/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * @link https://leetcode.com/problems/single-number-iii/
 */
var singleNumber = function (nums) {
  const TIMES_REPEAT = 2;

  if (nums.length === TIMES_REPEAT) return nums;

  const mapNums = new Map();

  for (let num of nums) {
    const count = (mapNums.get(num) || 0) + 1;

    if (count === TIMES_REPEAT) mapNums.delete(num);
    else mapNums.set(num, count);
  }

  return [...mapNums.keys()];
};
