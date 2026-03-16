/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @link https://leetcode.com/problems/valid-anagram/
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const map = new Map();
    for (const letter of s) {
        map.set(letter, (map.get(letter) || 0) + 1);
    }

    for (const letter of t) {
        const value = map.get(letter);

        if(value === undefined || value === 0) return false;

        map.set(letter, value-1);
    }

    return true;
};
