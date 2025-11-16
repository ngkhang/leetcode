/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * @link https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/
 */
var getSneakyNumbers = function (nums) {
  const set = new Set();

  return nums.filter((num) => {
    if (set.has(num)) return true;

    set.add(num);
  });
};
