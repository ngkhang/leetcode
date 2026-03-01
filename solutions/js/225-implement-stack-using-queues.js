/**
 * @link https://leetcode.com/problems/implement-stack-using-queues/
 */
var MyStack = function () {
    const obj = Object.create(MyStack.prototype);
    obj.in = [];
    obj.out = [];

    return obj;
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.in.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    while (this.in.length > 1) {
        this.out.push(this.in.shift());
    }

    const poppedVal = this.in.shift();
    [this.in, this.out] = [this.out, this.in];

    return poppedVal;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    while (this.in.length > 1) {
        this.out.push(this.in.shift());
    }

    const topVal = this.in[0];
    this.out.push(this.in.shift());
    [this.in, this.out] = [this.out, this.in];

    return topVal;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.in.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
