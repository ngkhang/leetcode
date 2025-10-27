/**
 * @link https://leetcode.com/problems/contains-duplicate-ii/
 */
export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    const j = map.get(num);

    if (j !== undefined && Math.abs(i - j) <= k) return true;

    map.set(num, i);
  }

  return false;
}
