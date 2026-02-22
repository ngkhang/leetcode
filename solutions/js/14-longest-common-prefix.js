/**
 * @param {string[]} strings
 * @return {string}
 * @link https://leetcode.com/problems/longest-common-prefix/
 */
var longestCommonPrefix = function (strings) {
    const countStr = strings.length;
    if (countStr === 0) return "";

    const sampleStr = strings[0];

    for (let i = 0; i < sampleStr.length; i++) {
        const char = sampleStr[i];

        for (let j = 0; j < countStr; j++) {
            const charCompare = strings[j][i];

            if (charCompare === undefined || charCompare !== char) {
                return sampleStr.substring(0, i);
            }
        }
    }

    return sampleStr;
};
