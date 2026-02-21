/**
 * @link https://leetcode.com/problems/reverse-bits
 */
export function reverseBits(n: number): number {
    const MAX_BITS = 32;
    let bin = '';
    let number = n;
    for (let i = 0; i < MAX_BITS; i++) {
        bin += number & 1;
        number = (number >> 1);
    }
    return parseInt(bin, 2);
};
