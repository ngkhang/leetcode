/**
 * @link https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
 */
export function numberOfSteps(num: number): number {
  let step = 0;

  while (num > 0) {
    num = num % 2 === 0 ? num / 2 : num - 1;
    step++;
  }

  return step;
}
