/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 *
 * @link https://leetcode.com/problems/add-strings/
 */
var addStrings = function (num1, num2) {
  const size1 = num1.length;
  const size2 = num2.length;
  let memo = 0;
  let strTotal = "";
  const size = Math.max(size1, size2);

  const strNum1 = "0".repeat(size - size1) + num1;
  const strNum2 = "0".repeat(size - size2) + num2;

  for (let i = size - 1; i >= 0; i--) {
    const number1 = +strNum1[i];
    const number2 = +strNum2[i];

    if (number1 + number2 + memo >= 10) {
      strTotal = `${number1 + number2 + memo - 10}` + strTotal;
      memo = 1;
    } else {
      strTotal = `${number1 + number2 + memo}` + strTotal;
      memo = 0;
    }
  }
  if (memo) strTotal = `1${strTotal}`;
  return strTotal || "0";
};
