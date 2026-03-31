/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * @link https://leetcode.com/problems/ransom-note/
 */
var canConstruct = function (ransomNote, magazine) {
    const mapMagazine = new Map();

    for (const charMagazine of magazine) {
        const count = (mapMagazine.get(charMagazine) || 0) + 1;
        mapMagazine.set(charMagazine, count);
    }

    for (const charNote of ransomNote) {
        const value = (mapMagazine.get(charNote) || 0) - 1;

        if (value === -1) return false;
        mapMagazine.set(charNote, value);
    }

    return true;
};
