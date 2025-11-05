/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 *
 * @link https://leetcode.com/problems/add-to-array-form-of-integer/
 */
var addToArrayForm = function (num, k) {
  const result = [];
  let carry = k;

  for (let i = num.length - 1; i >= 0 || carry > 0; i--) {
    if (i >= 0) carry += num[i];

    result.push(carry % 10);
    carry = Math.floor(carry / 10);
  }

  return result.reverse();
};
