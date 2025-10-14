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
 *
 * @link https://leetcode.com/problems/first-bad-version/
 */
var solution = function (isBadVersion) {
	/**
	 * @param {integer} n Total versions
	 * @return {integer} The first bad version
	 */
	return function (n) {
		let firstVersion = 1;
		let lastedVersion = n;

		while (firstVersion < lastedVersion) {
			const midVersion = Math.floor((firstVersion + lastedVersion) / 2);

			if (isBadVersion(midVersion)) lastedVersion = midVersion;
			else firstVersion = midVersion + 1;
		}

		return firstVersion;
	};
};
