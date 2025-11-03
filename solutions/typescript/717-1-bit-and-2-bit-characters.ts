/**
 * @link https://leetcode.com/problems/1-bit-and-2-bit-characters/
 */
export function isOneBitCharacter(bits: number[]): boolean {
  const lastIndex = bits.length - 1;
  let i = 0;

  while (i < lastIndex) {
    const bit = bits[i];

    i += bit === 1 ? 2 : 1;
  }

  return i === lastIndex;
}
