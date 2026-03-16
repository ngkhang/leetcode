/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @link https://leetcode.com/problems/valid-anagram/
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    const mapString = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        const countS = (mapString.get(charS) || 0) + 1;
        mapString.set(charS, countS);

        const countT = (mapString.get(charT) || 0) - 1;
        mapString.set(charT, countT);
    }

    for (const [_key, value] of mapString.entries()) {
        if (value !== 0) return false;
    }

    return true;
};
