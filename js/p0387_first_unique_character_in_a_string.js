/**
 * @param {string} s
 * @return {number}
 * @link https://leetcode.com/problems/first-unique-character-in-a-string/
 */
var firstUniqChar = function (s) {
    const A_UNICODE = 97;
    const fre = [];

    for (const char of s) {
        const position = char.charCodeAt(0) - A_UNICODE;

        fre[position] = (fre[position] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        const position = s[i].charCodeAt(0) - A_UNICODE;

        if (fre[position] === 1) return i;
    }

    return -1;
};
