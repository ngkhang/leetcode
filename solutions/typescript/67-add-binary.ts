/**
 * @link https://leetcode.com/problems/add-binary/
 */
export function addBinary(a: string, b: string): string {
  /**
   * Full Adder
   * binA: first bit
   * binB: second bit
   * carry: (initial = 0)
   *
   * sum = binA XOR binB XOR carry
   * carry = ((binA XOR binB) AND carry) + (binA AND binB)
   */
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;
  let result = "";

  while (i >= 0 || j >= 0 || carry > 0) {
    const binA = i >= 0 ? +a[i] : 0;
    const binB = j >= 0 ? +b[j] : 0;
    const sum = binA ^ binB ^ carry;

    result = String(sum) + result;
    carry = ((binA ^ binB) & carry) + (binA & binB);
    i--;
    j--;
  }
  return result;
}
