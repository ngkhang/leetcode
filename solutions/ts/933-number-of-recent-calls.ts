/**
 * @link https://leetcode.com/problems/number-of-recent-calls/
 */

class MyNode<T> {
    public value: T;
    public next: MyNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class MyLinkedList<T> {
    public head: MyNode<T> | null = null;
    public tail: MyNode<T> | null = null;
    public size = 0;

    constructor(initialValue?: T) {
        if (initialValue !== undefined) {
            const newNode = new MyNode(initialValue);
            this.head = newNode;
            this.tail = this.head;
            this.size++;
        }
    }

    public insertTail(value: T) {
        const newNode = new MyNode(value);
        if (!this.tail) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    public removeHead() {
        if (!this.head) return;

        if (!this.head.next) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.size--;
    }
}

export class RecentCounter {
    private requestsPing: MyLinkedList<number>;
    private REQUEST_TIME_DELAY_MS = 3000;
    constructor() {
        this.requestsPing = new MyLinkedList<number>();
    }

    ping(t: number): number {
        this.requestsPing.insertTail(t);

        let curr = this.requestsPing.head;

        while (curr && t - curr.value > this.REQUEST_TIME_DELAY_MS) {
            this.requestsPing.removeHead();
            curr = this.requestsPing.head;
        }

        return this.requestsPing.size;
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
