/**
 * @param {number} num
 * @return {number}
 *
 * @link https://leetcode.com/problems/maximum-69-number/
 */
var maximum69Number = function (num) {
  const map = new Map();
  let isChange = false;
  let index = 0;
  let number = num;
  let result = 0;

  while (number > 0) {
    const digit = number % 10;
    map.set(index, digit);
    index++;
    number = Math.floor(number / 10);
  }

  for (let i = index - 1; i >= 0; i--) {
    const digit = map.get(i);

    if (!digit) continue;

    if (digit === 6 && isChange === false) {
      result += 9 * 10 ** i;
      isChange = true;
      continue;
    }
    result += digit * 10 ** i;
  }

  return result;
};
