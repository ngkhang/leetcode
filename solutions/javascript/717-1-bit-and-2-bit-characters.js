/**
 * @param {number[]} bits
 * @return {boolean}
 *
 * @link https://leetcode.com/problems/1-bit-and-2-bit-characters/
 */
var isOneBitCharacter = function (bits) {
  const lastIndex = bits.length;
  let i = 0;

  while (i < lastIndex) {
    i += bits[i] === 1 ? 2 : 1;
  }

  return i === lastIndex - 1;
};
