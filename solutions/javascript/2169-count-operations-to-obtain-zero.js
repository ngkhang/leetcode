/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 *
 * @link https://leetcode.com/problems/count-operations-to-obtain-zero/
 */
var countOperations = function (num1, num2) {
  let number1 = num1;
  let number2 = num2;
  let count = 0;

  while (number1 !== 0 && number2 !== 0) {
    if (number1 >= number2) number1 -= number2;
    else number2 -= number1;
    count++;
  }

  return count;
};
