/**
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const mapString = new Map();

  for (const index in s) {
    const value = mapString.get(s[index]);

    if (value) mapString.set(s[index], value + 1)
    else mapString.set(s[index], 1);
  }

  const arr = [...mapString.entries()];

  let uniqueStr;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] === 1) {
      uniqueStr = arr[i][0];
      break;
    }
  }

  return uniqueStr ? s.indexOf(uniqueStr) : -1;
};

console.log(firstUniqChar('dadsd'));