/**
 * @param {number} n
 * @return {number}
 * @link https://leetcode.com/problems/reverse-bits
 */
var reverseBits = function (n) {
    const MAX_BITS = 32;
    let number = n;
    let bin = "";

    for (let i = 0; i < MAX_BITS; i++) {
        bin += number & 1;
        number = number >> 1;
    }

    return parseInt(bin, 2);
};
