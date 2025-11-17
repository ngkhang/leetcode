/**
 * @link https://leetcode.com/problems/shuffle-the-array/
 */
export function shuffle(nums: number[], n: number): number[] {
  const result: number[] = [];

  for (let i = 0; i < n; i++) {
    result.push(nums[i], nums[n + i]);
  }

  return result;
}
