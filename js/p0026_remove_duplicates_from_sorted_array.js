/**
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */
var removeDuplicates = function (nums) {
    const size = nums.length;

    if (size <= 1) return size;

    let i = 1,
        j = 1;

    while (j < size) {
        if (nums[j] !== nums[j - 1]) {
            nums[i] = nums[j];
            i++;
        }

        j++;
    }

    return i;
};
