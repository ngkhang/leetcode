/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * @link https://leetcode.com/problems/concatenation-of-array/
 */
var getConcatenation = function (nums) {
  const size = nums.length;
  const result = [];

  nums.forEach((value, index) => {
    result[index] = value;
    result[index + size] = value;
  });

  return result;
};
