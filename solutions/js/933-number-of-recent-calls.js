var RecentCounter = function () {
    this.requestPing = [];
    this.REQUEST_TIME_DELAY_MS = 3000;
};

/**
 * @param {number} t
 * @return {number}
 * @link https://leetcode.com/problems/number-of-recent-calls/
 */
RecentCounter.prototype.ping = function (t) {
    this.requestPing.push(t);
    let count = 0;
    for (const ping of this.requestPing) {
        if (ping >= t - this.REQUEST_TIME_DELAY_MS) count++;
    }

    return count;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
