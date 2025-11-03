/**
 * @link https://leetcode.com/problems/add-strings/
 */
export function addStrings(num1: string, num2: string): string {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  const result: string[] = [];

  while (i >= 0 || j >= 0 || carry > 0) {
    const digit1 = i >= 0 ? +num1[i] : 0;
    const digit2 = j >= 0 ? +num2[j] : 0;

    const sum = digit1 + digit2 + carry;
    result.unshift(String(sum % 10));
    carry = Math.floor(sum / 10);
    i--;
    j--;
  }

  return result.join("");
}
