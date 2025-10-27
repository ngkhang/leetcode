/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 *
 * @link https://leetcode.com/problems/contains-duplicate-ii/
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const j = map.get(num);

    if ((j !== undefined) & (Math.abs(i - j) <= k)) return true;

    map.set(num, i);
  }
  return false;
};
