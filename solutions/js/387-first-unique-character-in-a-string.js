/**
 * @param {string} s
 * @return {number}
 * @link https://leetcode.com/problems/first-unique-character-in-a-string/
 */
var firstUniqChar = function (s) {
    const A_UNICODE = 97;
    const alphabet = new Array(26);

    for (const char of s) {
        const index = char.charCodeAt(0) - A_UNICODE;
        alphabet[index] = (alphabet[index] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        const index = s[i].charCodeAt(0) - A_UNICODE;
        if (alphabet[index] === 1) return i;
    }

    return -1;
};
