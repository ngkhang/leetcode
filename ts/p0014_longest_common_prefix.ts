/**
 * @link https://leetcode.com/problems/longest-common-prefix/
 */
function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";

    const STR_DEFAULT = strs[0];

    for (let i = 0; i < STR_DEFAULT.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (STR_DEFAULT[i] !== strs[j][i] || strs[j].length === i)
                return STR_DEFAULT.substring(0, i);
        }
    }

    return STR_DEFAULT;
}

export {};
