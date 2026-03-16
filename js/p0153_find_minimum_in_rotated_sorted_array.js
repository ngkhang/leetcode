/**
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 */
var findMin = function (nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const midd = left + Math.floor((right - left) / 2);
        
        if (nums[midd] > nums[right]) left = midd + 1;
        else right = midd;
    }

    return nums[left];
};
