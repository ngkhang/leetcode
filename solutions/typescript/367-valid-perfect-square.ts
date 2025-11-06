/**
 * @link https://leetcode.com/problems/valid-perfect-square/
 */
export function isPerfectSquare(num: number): boolean {
  if (num < 2) return true;

  let left = 2;
  let right = Math.floor(num / 2);

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    const square = mid * mid;

    if (square === num) return true;

    square < num ? (left = mid + 1) : (right = mid - 1);
  }

  return false;
}
