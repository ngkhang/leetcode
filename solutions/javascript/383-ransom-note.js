/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 *
 * @link https://leetcode.com/problems/ransom-note/
 */
var canConstruct = function (ransomNote, magazine) {
    const magazineCount = new Map();

    for (const char of magazine) {
        magazineCount.set(char, (magazineCount.get(char) || 0) + 1);
    }

    for (const char of ransomNote) {
        const count = magazineCount.get(char);

        if (count) magazineCount.set(char, count - 1);
        else return false;
    }

    return true;
};
