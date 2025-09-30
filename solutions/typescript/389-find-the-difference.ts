/**
 * https://leetcode.com/problems/find-the-difference/
 */
export function findTheDifference(s: string, t: string): string {
	if (s.length === 0) return t;

	let letterAdded = "";
	const mapS = new Map<string, number>();

	for (const char of s) {
		let count = (mapS.get(char) || 0) + 1;
		mapS.set(char, count);
	}

	for (const char of t) {
		const isExist = mapS.get(char);

		if (!isExist) {
			letterAdded = char;
			break;
		}

		mapS.set(char, isExist - 1);
	}

	return letterAdded;
}
