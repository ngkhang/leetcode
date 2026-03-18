/**
 * @param {number} capacity
 * @link https://leetcode.com/problems/lru-cache/
 */
class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.CAPACITY = capacity;
        this.map = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const value = this.map.get(key);

        if (value === undefined) return -1;

        this.map.delete(key);
        this.map.set(key, value);

        return value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.map.has(key)) this.map.delete(key);

        this.map.set(key, value);

        if (this.map.size > this.CAPACITY) {
            const lastedKey = this.map.keys().next().value;
            this.map.delete(lastedKey);
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
