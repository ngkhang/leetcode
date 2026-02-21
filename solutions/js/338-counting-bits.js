/**
 * @param {number} n
 * @return {number[]}
 * @link https://leetcode.com/problems/counting-bits/
 */
var countBits = function (n) {
    const bits = Array(n + 1).fill(0);

    for (let i = 1; i < n + 1; i++) {
        bits[i] = bits[i >> 1] + (i & 1);
    }

    return bits;
};
