/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 * @link https://leetcode.com/problems/first-bad-version/
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let left = 1;
        let right = n;

        while (left < right) {
            const midd = Math.floor((right + left) / 2);
            if (isBadVersion(midd)) right = midd;
            else left = midd + 1;
        }

        return left;
    };
};
