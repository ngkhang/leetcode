/**
 * @link https://leetcode.com/problems/plus-one/
 */
export function plusOne(digits: number[]): number[] {
  let memory = 1;
  const output: number[] = [];
  const size = digits.length;

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
}
