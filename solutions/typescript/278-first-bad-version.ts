/**
 * @link https://leetcode.com/problems/first-bad-version/
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */
export const solution = function (isBadVersion: (version: number) => boolean) {
	return function (n: number): number {
		let firstVersion = 1;
		let lastedVersion = n;

		while (firstVersion < lastedVersion) {
			const midVersion = Math.floor((firstVersion + lastedVersion) / 2);

			if (isBadVersion(midVersion)) {
				lastedVersion = midVersion;
			} else {
				firstVersion = midVersion + 1;
			}
		}
		return firstVersion;
	};
};
