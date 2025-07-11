/**
 * https://leetcode.com/problems/first-letter-to-appear-twice/
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  const mapString = new Map();

  let twiceChar = { char: '', count: Infinity }

  for (let i = 0; i < s.length; i++) {
    let isExist = mapString.get(s[i]);

    if (typeof isExist === 'undefined') {
      mapString.set(s[i], i);
      continue;
    }

    if (i < twiceChar.count) {
      twiceChar.count = i;
      twiceChar.char = s[i];
    }
  }

  return twiceChar.char;
};
