/**
 * https://leetcode.com/problems/contains-duplicate-ii/
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const j = map.get(nums[i]);

    if (typeof j !== 'undefined' && Math.abs(i - j) <= k) return true;

    map.set(nums[i], i);
  }
  return false;
};