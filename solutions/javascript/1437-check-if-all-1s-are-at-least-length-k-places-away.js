/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 *
 * @link https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/
 */
var kLengthApart = function (nums, k) {
  let lastOneIndex = -1;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num === 1) {
      if (lastOneIndex !== -1 && i - lastOneIndex - 1 < k) return false;
      lastOneIndex = i;
    }
  }

  return true;
};
