/**
 * @link https://leetcode.com/problems/number-of-recent-calls/
 */
class RecentCounter {
    private requestsPing: MyLinkedList;
    private REQUEST_TIME_DELAY_MS = 3000;

    constructor() {
        this.requestsPing = new MyLinkedList();
    }

    ping(t: number): number {
        this.requestsPing.insertTail(t);

        let curr = this.requestsPing.head;

        // requested: [t1, t2, t3, t4,....]
        // Remove time if      t1 < t - 3000
        //             curr.value < t - REQUEST_TIME_DELAY_MS
        //             t - curr.value > REQUEST_TIME_DELAY_MS
        while (curr && t - curr.value > this.REQUEST_TIME_DELAY_MS) {
            this.requestsPing.removeHead();
            curr = this.requestsPing.head;
        }

        return this.requestsPing.size;
    }
}

class MyNode {
    public next: MyNode | null = null;

    constructor(public value: number) {}
}

class MyLinkedList {
    public head: MyNode | null = null;
    public tail: MyNode | null = null;
    public size: number = 0;

    constructor(initialValue?: number) {
        if (initialValue !== undefined) {
            const newNode = new MyNode(initialValue);
            this.head = newNode;
            this.tail = newNode;
            this.size++;
        }
    }

    public insertTail(value: number) {
        const newNode = new MyNode(value);

        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    public removeHead() {
        if (!this.head) return;

        this.size--;
        this.head = this.head.next;
        if (!this.head) this.tail = null;
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

export {};
