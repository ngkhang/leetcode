/**
 * https://leetcode.com/problems/ransom-note/
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const mapMagazine = new Map();

  for (const charMagazine of magazine) {
    let currentValue = mapMagazine.get(charMagazine);
    mapMagazine.set(charMagazine, currentValue ? currentValue + 1 : 1);
  }

  for (const charNote of ransomNote) {
    const currentValue = mapMagazine.get(charNote);

    if (!currentValue) return false;

    mapMagazine.set(charNote, currentValue - 1);
  }

  return true;
};