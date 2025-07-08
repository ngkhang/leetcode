/**
 * https://leetcode.com/problems/single-number/
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  if (nums.length === 1) return nums[0];

  const mapNumber = new Map();
  for (let i = 0; i < nums.length; i++) {
    const count = mapNumber.get(nums[i]);
    mapNumber.set(nums[i], count ? count + 1 : 1);
  }

  const arr = [...mapNumber.entries()];

  for (const [num, count] of arr) {
    if (count === 1) return num;
  }
};
