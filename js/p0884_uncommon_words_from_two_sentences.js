/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 * @link https://leetcode.com/problems/uncommon-words-from-two-sentences/
 */
var uncommonFromSentences = function (s1, s2) {
    const map = new Map();
    const uncommon = [];
    const arrStr = `${s1} ${s2}`.split(" ");

    for (const str of arrStr) {
        map.set(str, (map.get(str) || 0) + 1);
    }

    map.forEach((count, str) => count === 1 && uncommon.push(str));

    return uncommon;
};
