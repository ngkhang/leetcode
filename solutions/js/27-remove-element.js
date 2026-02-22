/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * @link https://leetcode.com/problems/remove-element/
 */
var removeElement = function (nums, val) {
    let i = 0;
    let j = nums.length - 1;

    while (i <= j) {
        if (nums[i] !== val) {
            i++;
            continue;
        }

        [nums[i], nums[j]] = [nums[j], nums[i]];
        j--;
    }
    return i;
};
