/**
 * @link https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 */
function findMin(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let midd = left + Math.floor((right - left) / 2);

        if (nums[midd] > nums[right]) left = midd + 1;
        else right = midd;
    }
    return nums[left];
}

export {};
