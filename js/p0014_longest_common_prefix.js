/**
 * @param {string[]} strs
 * @return {string}
 * @link https://leetcode.com/problems/longest-common-prefix/
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";

    const STR_DEFAULT = strs[0];

    for (let i = 0; i < STR_DEFAULT.length; i++) {
        const element = STR_DEFAULT[i];

        for (let j = 1; j < strs.length; j++) {
            if (strs[j].length === i || strs[j][i] !== STR_DEFAULT[i])
                return STR_DEFAULT.substring(0, i);
        }
    }

    return STR_DEFAULT;
};
