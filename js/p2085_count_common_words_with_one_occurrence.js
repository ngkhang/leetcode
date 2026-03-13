/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 * @link https://leetcode.com/problems/count-common-words-with-one-occurrence/
 */
var countWords = function (words1, words2) {
    const map = new Map();

    for (const word of words1) {
        map.set(word, (map.get(word) || 0) + 1);
    }

    for (const word of words2) {
        const count = map.get(word);
        if (count < 2) map.set(word, count - 1);
    }

    let count = 0;
    for (const [word, value] of map) {
        if (value === 0) count++;
    }

    return count;
};
