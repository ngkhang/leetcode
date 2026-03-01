/**
 * @link https://leetcode.com/problems/implement-stack-using-queues/
 */
export class MyStack {
    private qIn: number[] = [];
    private qOut: number[] = [];
    public sizeIn: number;
    public sizeOut: number;
    constructor() {
        this.sizeIn = this.qIn.length;
        this.sizeOut = this.qOut.length;
    }

    push(x: number): void {
        this.qIn.push(x);
        this.sizeIn++;
    }

    pop(): number {
        while (this.sizeIn > 1) {
            this.qOut.push(this.qIn.shift() as number);
            this.sizeOut++;
            this.sizeIn--;
        }

        const poppedVal = this.qIn.shift() as number;
        [this.qIn, this.qOut] = [this.qOut, this.qIn];
        this.sizeIn = this.qIn.length;
        this.sizeOut = this.qOut.length;

        return poppedVal;
    }

    top(): number {
        while (this.sizeIn > 1) {
            this.qOut.push(this.qIn.shift() as number);
            this.sizeOut++;
            this.sizeIn--;
        }

        const topVal = this.qIn[0];
        this.qOut.push(this.qIn.shift() as number);


        [this.qIn, this.qOut] = [this.qOut, this.qIn];
        this.sizeIn = this.qIn.length;
        this.sizeOut = this.qOut.length;
        return topVal;
    }

    empty(): boolean {
        return this.sizeIn === 0;
    }
}
/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
