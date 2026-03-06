/**
 * @link https://leetcode.com/problems/number-of-recent-calls/
 */
var RecentCounter = function () {
    this.REQUEST_TIME_DELAY_MS = 3000;
    this.requestsPing = new MyLinkedList();
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    this.requestsPing.insertTail(t);

    let curr = this.requestsPing.head;

    while (curr && t - curr.value > this.REQUEST_TIME_DELAY_MS) {
        this.requestsPing.removeHead();
        curr = this.requestsPing.head;
    }

    return this.requestsPing.size;
};

class MyNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MyLinkedList {
    head = null;
    tail = null;
    size = 0;

    constructor(initialValue) {
        if (initialValue !== undefined) {
            const newNode = new MyNode(initialValue);
            this.head = newNode;
            this.tail = newNode;
            this.size++;
        }
    }

    insertTail(value) {
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

    removeHead() {
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
