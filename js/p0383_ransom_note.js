/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * @link https://leetcode.com/problems/ransom-note/
 */
var canConstruct = function (ransomNote, magazine) {
    const UNICODE_A = "a".charCodeAt(0);
    const freq = Array.from({ length: 26 }).fill(0);

    for (const char of magazine) {
        const index = char.charCodeAt(0) - UNICODE_A;
        freq[index]++;
    }

    for (const char of ransomNote) {
        const index = char.charCodeAt(0) - UNICODE_A;

        if (freq[index] === 0) return false;
        freq[index]--;
    }

    return true;
};
