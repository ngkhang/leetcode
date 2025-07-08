/**
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = new Map();

  for (const index in nums) {
    if (map.has(nums[index])) return true;
    else map.set(nums[index], index)
  }

  return false;
};
