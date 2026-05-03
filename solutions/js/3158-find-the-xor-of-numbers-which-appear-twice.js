/**
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/
 */
var duplicateNumbersXOR = function (nums) {
    const map = new Map();
    let result = 0;

    nums.forEach((num) => {
        const count = (map.get(num) || 0) + 1;

        map.set(num, count);
    });

    map.forEach((count, num) => {
        if (count === 2) result ^= num;
    });

    return result;
};
