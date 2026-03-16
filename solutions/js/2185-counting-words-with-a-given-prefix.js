/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 * @link https://leetcode.com/problems/counting-words-with-a-given-prefix/
 */
var prefixCount = function (words, pref) {
    return words.filter((word) => word.startsWith(pref)).length;
};
