/**
 * @param {number[]} nums
 * @return {number}
 *
 * @link https://leetcode.com/problems/max-consecutive-ones/
 */
var findMaxConsecutiveOnes = function (nums) {
  let result = 0;
  let count = 0;

  for (const num of nums) {
    if (num === 0) {
      count = 0;
      continue;
    }

    count++;
    result = Math.max(result, count);
  }

  return result;
};
