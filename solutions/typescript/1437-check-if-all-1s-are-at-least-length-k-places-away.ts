/**
 * @link https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/
 */
export function kLengthApart(nums: number[], k: number): boolean {
  let lastIndex = -1;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num === 1) {
      if (lastIndex !== -1 && i - lastIndex - 1 < k) return false;
      lastIndex = i;
    }
  }

  return true;
}
