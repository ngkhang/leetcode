/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 *
 * @link https://leetcode.com/problems/minimum-moves-to-reach-target-score/
 */
var minMoves = function (target, maxDoubles) {
  let step = 0;

  while (target > 1) {
    if (target % 2 === 0 && maxDoubles > 0) {
      target = target / 2;
      maxDoubles--;
      step++;
      continue;
    }

    if (maxDoubles === 0) {
      step += target - 1;
      target = 0;
      break;
    }

    step += 2;
    target = (target - 1) / 2;
    maxDoubles--;
  }

  return step;
};
