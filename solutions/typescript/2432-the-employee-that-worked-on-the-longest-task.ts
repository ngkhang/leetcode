/**
 * @link https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/
 */
export function hardestWorker(n: number, logs: number[][]): number {
  let [userId, longestTime] = logs[0];
  let startTime = 0;

  for (const [id, endTime] of logs) {
    const completedTime = endTime - startTime;
    startTime = endTime;

    if (completedTime === longestTime) {
      userId = Math.min(userId, id);
      continue;
    }

    if (completedTime > longestTime) {
      longestTime = completedTime;
      userId = id;
    }
  }

  return userId;
}
