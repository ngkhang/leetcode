/**
 * @param {number} n
 * @return {number}
 * @link https://leetcode.com/problems/binary-gap/
 */
var binaryGap = function (n) {
    const bin = n.toString(2);
    let maxDistance = 0;
    let prevIndex = -1;

    for (let i = 0; i < bin.length; i++) {
        if (bin[i] !== "1") continue;

        if (prevIndex !== -1) maxDistance = Math.max(maxDistance, i - prevIndex);
        prevIndex = i;
    }
    return maxDistance;
};
