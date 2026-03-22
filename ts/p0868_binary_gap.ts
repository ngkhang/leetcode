/**
 * @link https://leetcode.com/problems/binary-gap/
 */
function binaryGap(n: number): number {
    let maxDistance = 0;
    let prevIndex = -1;
    const bin = n.toString(2);

    for (let i = 0; i < bin.length; i++) {
        const char = bin[i];

        if (char !== "1") continue;

        if (prevIndex !== -1) maxDistance = Math.max(maxDistance, i - prevIndex);
        prevIndex = i;
    }

    return maxDistance;
}

export {};
