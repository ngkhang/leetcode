interface Item {
    value: number;
    currMin: number;
}

/**
 * @link https://leetcode.com/problems/min-stack/
 */
class MinStack {
    private stack: Item[];

    constructor() {
        this.stack = [];
    }

    push(value: number): void {
        const newItem: Item = {
            value,
            currMin: this.stack.length === 0 ? value : Math.min(value, this.getMin()),
        };
        this.stack.push(newItem);
    }

    pop(): void {
        this.stack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1].value;
    }

    getMin(): number {
        return this.stack[this.stack.length - 1].currMin;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

export {};
