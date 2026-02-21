/**
 * @link https://leetcode.com/problems/number-of-1-bits/
 */
export function hammingWeight(n: number): number {
    const MAX_BITS = 32;

    let countBitOne = 0;
    for (let i = 0; i < MAX_BITS; i++) {
        if ((n >> i) & 1) countBitOne++;
    }
    return countBitOne;
};
