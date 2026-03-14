/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 * @link https://leetcode.com/problems/guess-number-higher-or-lower/
 */
var guessNumber = function(n) {
    let low = 1;
    let high = n;

    while(low <= high) {
        const midd = lower + Math.floor((high - low) / 2);
        const res = guess(midd);

        if (res === 0) return midd;

        if (res === 1) low = midd + 1;
        else high = midd -1;
    }

    return low;
};