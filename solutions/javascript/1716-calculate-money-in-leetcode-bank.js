/**
 * @param {number} n
 * @return {number}
 *
 * @link https://leetcode.com/problems/calculate-money-in-leetcode-bank/
 */
var arithmeticSum = (count, first, step = 1) => {
  return (count * (2 * first + (count - 1) * step)) / 2;
};

var totalMoney = function (n) {
  const fullWeeks = Math.floor(n / 7);
  const remainingDays = n % 7;
  let total = 0;

  for (let week = 1; week <= fullWeeks; week++) {
    total += arithmeticSum(7, week, 1);
  }

  if (remainingDays) total += arithmeticSum(remainingDays, fullWeeks + 1, 1);
  return total;
};
