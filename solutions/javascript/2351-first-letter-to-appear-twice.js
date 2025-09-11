/**
 * @param {string} s
 * @return {character}
 *
 * @link https://leetcode.com/problems/first-letter-to-appear-twice/
 */
var repeatedCharacter = function (s) {
    const strCountMap = new Map();

    for (const char of s) {
        const isExistChar = strCountMap.has(char);

        if (isExistChar) return char;

        strCountMap.set(char, 1);
    }
};
