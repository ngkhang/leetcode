/**
 * @link https://leetcode.com/problems/implement-queue-using-stacks/
 */
var MyQueue = function () {
    let obj = Object.create(MyQueue.prototype);
    obj.input = [];
    obj.output = [];
    obj.sizeIn = obj.input.length;
    obj.sizeOut = obj.output.length;

    return obj;
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.input.push(x);
    this.sizeIn++;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    this.peek();

    const itemRemoved = this.output.pop();
    this.sizeOut--;
    return itemRemoved;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (!this.sizeOut) {
        while (this.sizeIn) {
            this.output.push(this.input.pop());
            this.sizeIn--;
            this.sizeOut++;
        }
    }

    return this.output[this.sizeOut - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return !this.sizeIn && !this.sizeOut;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
