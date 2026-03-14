/**
 * @param {number} num
 * @return {boolean}
 * @link https://leetcode.com/problems/valid-perfect-square/
 */
var isPerfectSquare = function (num) {
    if (num < 2) return true;

    let low = 1;
    let high = Math.floor(num / 2);

    while (low <= high) {
        const midd = Math.floor((low + high) / 2);
        if (midd ** 2 === num) return true;

        midd ** 2 > num ? (high = midd - 1) : (low = low + 1);
    }

    return false;
};
