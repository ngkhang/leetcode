/**
 * @link https://leetcode.com/problems/counting-bits/
 */
export function countBits(n: number): number[] {
    const bits = Array<number>(n + 1).fill(0);

    for (let i = 1; i < n + 1; i++) {
        bits[i] = bits[i >> 1] + (i & 1);
    }

    return bits;
};

console.log(countBits(2));
