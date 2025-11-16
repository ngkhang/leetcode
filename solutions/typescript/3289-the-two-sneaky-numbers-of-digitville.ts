/**
 * @link https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/
 */
export function getSneakyNumbers(nums: number[]): number[] {
  const set = new Set<number>();

  return nums.filter((num) => {
    if (set.has(num)) return true;
    set.add(num);
  });
}
