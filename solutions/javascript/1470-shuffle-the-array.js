/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 *
 * @link https://leetcode.com/problems/shuffle-the-array/
 */
var shuffle = function (nums, n) {
  const output = [];

  for (let i = 0; i < n; i++) {
    output.push(nums[i], nums[n + i]);
  }
  return output;
};
