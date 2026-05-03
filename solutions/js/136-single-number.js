/**
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.com/problems/single-number/
 */
var singleNumber = function (nums) {
    /*
        Bit-Manipulation: using XOR
            0 ^ 0 = 0
            1 ^ 1 = 0
            1 ^ 0 = 1
            0 ^ 1 = 1
     */
    let result = 0;
    nums.forEach((num) => (result ^= num));

    return result;
};
