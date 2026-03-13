/**
 * @link https://leetcode.com/problems/first-bad-version/
 */
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {

    return function (n: number): number {
        let firstVersion = 1;
        let lastedVersion = n;

        while (firstVersion < lastedVersion) {
            const middVersion = Math.floor(firstVersion + ((lastedVersion - firstVersion) / 2));

            if (!isBadVersion(middVersion)) firstVersion = middVersion + 1;
            else lastedVersion = middVersion;
        }
        return firstVersion;
    };
};

export { };
