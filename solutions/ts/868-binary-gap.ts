/**
 * @link https://leetcode.com/problems/binary-gap/
 */
export function binaryGap(n: number): number {
    const bin = n.toString(2);
    let maxDis = 0;
    let prev = -1;

    for (let i = 0; i < bin.length; i++) {
        if (bin[i] !== '1') continue;

        if (prev !== -1) maxDis = Math.max(maxDis, i - prev);
        prev = i;
    }
    return maxDis;
};
