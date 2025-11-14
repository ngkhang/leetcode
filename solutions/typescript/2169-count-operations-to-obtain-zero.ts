/**
 * @link https://leetcode.com/problems/count-operations-to-obtain-zero/
 */
export function countOperations(num1: number, num2: number): number {
  let number1 = num1;
  let number2 = num2;
  let count = 0;

  while (number1 !== 0 && number2 !== 0) {
    if (number1 >= number2) number1 -= number2;
    else number2 -= number1;
    count++;
  }

  return count;
}
