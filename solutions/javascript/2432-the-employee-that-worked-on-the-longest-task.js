/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 *
 * @link https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/
 */
var hardestWorker = function (n, logs) {
  let startTime = 0;
  let [userId, longestTime] = logs[0];

  for (const [id, endTime] of logs) {
    const completedTime = endTime - startTime;
    startTime = endTime;

    if (longestTime === completedTime) {
      userId = Math.min(userId, id);
      continue;
    }

    if (longestTime < completedTime) {
      longestTime = completedTime;
      userId = id;
    }
  }

  return userId;
};
