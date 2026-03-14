/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @link https://leetcode.com/problems/binary-search/
 */
var search = function (nums, target) {
    const size = nums.length;
    let leftIndex = 0;
    let rightIndex = size - 1;

    while (leftIndex <= rightIndex) {
        const middIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
        const num = nums[middIndex];

        if (num === target) return middIndex;

        num > target ? (rightIndex = middIndex - 1) : (leftIndex = middIndex + 1);
    }

    return -1;
};
