/**
 * @param {number[]} digits
 * @return {number[]}
 *
 * @link https://leetcode.com/problems/plus-one/
 */
var plusOne = function (digits) {
  const output = [];
  const size = digits.length;
  let memory = 1;

  for (let i = size - 1; i >= 0; i--) {
    const num = digits[i];

    if (num + memory >= 10) {
      output[i] = 10 - num - memory;
      continue;
    }

    output[i] = num + memory;
    memory = 0;
  }

  if (memory) output.unshift(memory);

  return output;
};
