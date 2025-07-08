/**
 * https://leetcode.com/problems/search-insert-position/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// TODO: Expect O(log n) but current is O(n)
var searchInsert = function (nums, target) {
  const sizeNums = nums.length;

  if (nums[0] >= target) return 0;

  for (let index = 1; index < nums.length; index++) {
    if (nums[index] >= target) return index;
  }

  return sizeNums;
}
