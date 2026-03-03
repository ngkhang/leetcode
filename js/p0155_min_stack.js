/**
 * @link https://leetcode.com/problems/min-stack/
 */
var MinStack = function () {
    this.stack = [];
};

/**
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function (value) {
    let currMin = this.getMin();
    const minValue = currMin === null || currMin > value ? value : currMin;

    this.stack.push({ value, currMin: minValue });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.stack.length !== 0 ? this.stack[this.stack.length - 1].currMin : null;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
