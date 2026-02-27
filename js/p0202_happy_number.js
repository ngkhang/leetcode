/**
 * @param {number} n
 * @return {boolean}
 * @link https://leetcode.com/problems/happy-number/
 */
var isHappy = function (n) {
    const sumOfSquaredDigits = (n) => {
        let result = 0;

        while (n !== 0) {
            result += (n % 10) ** 2;
            n = Math.trunc(n / 10);
        }

        return result;
    };

    const seen = new Set();

    while (true) {
        if (n === 1) return true;
        if (seen.has(n)) return false;

        seen.add(n);
        n = sumOfSquaredDigits(n);
    }
};
