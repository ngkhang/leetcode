/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let pStart = 0;
  let pEnd = nums.length - 1;
  let curr = 0;

  while (curr <= pEnd) {
    const num = nums[curr];

    if (num === 2) {
      [nums[curr], nums[pEnd]] = [nums[pEnd], nums[curr]];
      pEnd--;
      continue;
    }

    if (num === 0) {
      [nums[pStart], nums[curr]] = [nums[curr], nums[pStart]];
      pStart++;
    }

    curr++;
  }
};
