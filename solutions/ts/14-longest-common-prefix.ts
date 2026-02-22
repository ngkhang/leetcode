/**
 * @link https://leetcode.com/problems/longest-common-prefix/
 */
export function longestCommonPrefix(strings: string[]): string {
    if (strings.length === 0) return '';

    const sampleString = strings[0];

    for (let i = 0; i < sampleString.length; i++) {
        const char = sampleString[i];

        for (let j = 1; j < strings.length; j++) {
            const charCompare = strings[j][i];
            if (charCompare === undefined || charCompare !== char) {
                return sampleString.substring(0, i);
            }
        }
    }

    return sampleString;
};
