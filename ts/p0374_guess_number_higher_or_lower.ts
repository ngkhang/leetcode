/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 */
var guess = function (num: number): number {};

/**
 * @link https://leetcode.com/problems/guess-number-higher-or-lower/
 */
function guessNumber(n: number): number {
    let min = 1;
    let max = n;

    while (min <= max) {
        const midd = min + Math.floor((max - min) / 2);
        const res = guess(midd);

        if (res === 0) return midd;

        if (res === 1) min = midd + 1;
        else max = midd - 1;
    }

    return min;
}

export {};
