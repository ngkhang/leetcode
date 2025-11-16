/**
 * @link https://leetcode.com/problems/concatenation-of-array/
 */
export function getConcatenation(nums: number[]): number[] {
  const size = nums.length;
  const result = new Array(size * 2);

  nums.forEach((value, index) => {
    result[index] = value;
    result[index + size] = value;
  });

  return result;
}
