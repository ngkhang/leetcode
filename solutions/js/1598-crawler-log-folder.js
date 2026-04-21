/**
 * @param {string[]} logs
 * @return {number}
 * @link https://leetcode.com/problems/crawler-log-folder/
 */
var minOperations = function (logs) {
    let count = 0;

    for (const folder of logs) {
        if (folder === "./") continue;

        count = folder === "../" ? Math.max(count - 1, 0) : count + 1;
    }

    return count;
};
