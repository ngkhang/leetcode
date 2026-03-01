/**
 * @link https://leetcode.com/problems/implement-queue-using-stacks/
 */
export class MyQueue {
    private sizeIn: number;
    private sizeOut: number;
    private input: number[] = [];
    private output: number[] = [];
    constructor() {
        this.sizeIn = this.input.length;
        this.sizeOut = this.output.length;
    }

    push(x: number): void {
        this.input.push(x);
        this.sizeIn++;
    }

    pop(): number {
        this.peek();

        this.sizeOut--;
        return this.output.pop() as number;
    }

    peek(): number {
        if (!this.sizeOut) {
            while (this.sizeIn) {
                this.output.push(this.input.pop() as number);
                this.sizeIn--;
                this.sizeOut++;
            }
        }

        return this.output[this.sizeOut - 1];
    }

    empty(): boolean {
        return !this.sizeIn && !this.sizeOut;
    }
}
