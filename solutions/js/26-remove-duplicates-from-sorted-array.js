/**
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */
var removeDuplicates = function (nums) {
    const n = nums.length;

    if (n === 0 || n === 1) return n;

    let i = 1;
    let j = 1;

    while (j < n) {
        if (nums[j] !== nums[j - 1]) {
            nums[i] = nums[j];
            i++;
        }
        j++;
    }

    return i;
};
