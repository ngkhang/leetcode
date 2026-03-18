/**
 * @link https://leetcode.com/problems/lru-cache/
 */
class LRUCache {
    private readonly CAPACITY: number;
    private readonly map = new Map<number, DoublyNode>();
    private readonly head: DoublyNode;
    private readonly tail: DoublyNode;

    constructor(capacity: number) {
        this.CAPACITY = capacity;
        const initialNode = new DoublyNode(-1, -1);
        this.head = initialNode;
        this.tail = initialNode;

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(key: number): number {
        const node = this.map.get(key);

        if (!node) return -1;

        this.moveToHead(node);
        return node.value;
    }

    put(key: number, value: number): void {
        const existingNode = this.map.get(key);

        if (existingNode) {
            existingNode.value = value;

            this.moveToHead(existingNode);
            return;
        }

        if (this.map.size >= this.CAPACITY) {
            const lastNode = this.getTailPrev();

            if (lastNode) {
                this.removeNode(lastNode);
                this.map.delete(lastNode.key);
            }
        }

        const newNode = new DoublyNode(key, value);
        this.map.set(key, newNode);
        this.addToHead(newNode);
    }

    private moveToHead(node: DoublyNode): void {
        this.removeNode(node);
        this.addToHead(node);
    }

    private addToHead(node: DoublyNode): void {
        const nextNode = this.head.next;

        node.prev = this.head;
        node.next = nextNode;

        if (nextNode) nextNode.prev = node;
        this.head.next = node;
    }

    private removeNode(node: DoublyNode): void {
        const nextNode = node.next;
        const prevNode = node.prev;

        if (nextNode) nextNode.prev = prevNode;
        if (prevNode) prevNode.next = nextNode;

        node.prev = null;
        node.next = null;
    }

    private getTailPrev(): DoublyNode | null {
        return this.tail.prev;
    }
}

class DoublyNode {
    constructor(
        public key: number,
        public value: number,
        public prev: DoublyNode | null = null,
        public next: DoublyNode | null = null,
    ) {}
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

export {};
