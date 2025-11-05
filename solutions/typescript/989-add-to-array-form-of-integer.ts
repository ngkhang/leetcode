/**
 * @link https://leetcode.com/problems/add-to-array-form-of-integer/
 */
export function addToArrayForm(num: number[], k: number): number[] {
  const result: number[] = [];
  let carry = k;

  let i = num.length - 1;
  while (i >= 0 || carry > 0) {
    if (i >= 0) carry += num[i];

    result.push(carry % 10);
    carry = Math.floor(carry / 10);

    i--;
  }

  return result.reverse();
}
