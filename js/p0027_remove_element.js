/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * @link https://leetcode.com/problems/remove-element/
 */
var removeElement = function (nums, val) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        if (nums[start] !== val) {
            start++;
            continue;
        }

        [nums[start], nums[end]] = [nums[end], nums[start]];
        end--;
    }
    return start;
};
