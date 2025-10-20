/**
 * @link https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
 */
export function finalValueAfterOperations(operations: string[]): number {
  /**
   * Index:         0 1 2
   * Case prefix:   + + X
   * Case prefix:   - - X
   * Case suffix:   X + +
   * Case suffix:   X - -
   * Choose index = 1
   */
  return operations.reduce((value, operator) => {
    return (value += operator[1] === "+" ? 1 : -1);
  }, 0);
}
