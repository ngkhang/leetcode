/**
 * @param {string[]} operations
 * @return {number}
 *
 * @link https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
 */
var finalValueAfterOperations = function (operations) {
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
};
