/**
 * @link https://leetcode.com/problems/max-consecutive-ones/
 */
export function findMaxConsecutiveOnes(nums: number[]): number {
  let result = 0;
  let count = 0;

  for (const num of nums) {
    if (num === 0) {
      count = 0;
      continue;
    }
    count++;
    result = Math.max(result, count);
  }

  return result;
}
