
class LNode {

    prev: LNode | null = null
    next: LNode | null = null
    data: any

    constructor(data: any) {
        this.data = data
    }
}

class DoublyLinkedList {

    head: LNode | null = null
    tail: LNode | null = null
    size = 0

    append(data: any) {
        let newNode = new LNode(data)
        if (!this.head) {
            this.head = newNode
        } else {
            this.tail!.next = newNode
            newNode.prev = this.tail
        }
        this.tail = newNode
        this.size++
    }

    prepend(data: any) {
        let newNode = new LNode(data)
        if (!this.head) {
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
        }
        this.head = newNode
        this.size++
    }

    insertAt(index: number, data: any) {
        if (index < 0 || index > this.size) {
            throw new Error("Index out of bounds");
        }

        if (index === 0) return this.prepend(data)
        if (index === this.size) return this.append(data)

        const newNode = new LNode(data);
        let curr: LNode | null = this.head;

        // Move curr to the node before the desired index
        for (let i = 1; i < index; i++) {
            curr = curr!.next;
        }

        const temp = curr!.next;

        // Insert newNode between curr and temp
        newNode.next = temp;
        if (temp) temp.prev = newNode;
        curr!.next = newNode;
        newNode.prev = curr;

        this.size++;
    }


    print() {
        let dataArray: any[] = []
        let curr = this.head
        while (curr) {
            dataArray.push(curr.data)
            curr = curr.next
        }
        console.log(dataArray);
    }

    printReverse() {
        let dataArray: any[] = []
        let curr = this.tail
        while (curr) {
            dataArray.push(curr.data)
            curr = curr.prev
        }
        console.log(dataArray);
    }

    deleteHead() {
        if (!this.head) return
        if (this.size === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head!.prev = null
        }
        this.size--
    }

    deleteTail() {
        if (!this.tail) return
        if (this.size === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail!.next = null
        }
        this.size--
    }

    deleteAt(index: number) {

        if (index < 0 || index >= this.size) throw new Error("Index out of bound")

        if (!this.head) return

        if (index === 0) return this.deleteHead()
        if (index === this.size - 1) return this.deleteTail()

        let curr: LNode | null = this.head
        while (index--) {
            curr = curr!.next
        }
        curr!.prev!.next = curr!.next
        curr!.next!.prev = curr!.prev
        this.size--
    }

    getAt(index: number) {

        if (index < 0 || index >= this.size) throw new Error("Index out of bound")

        let curr = this.head
        for (let i = 0; i < index; i++) {
            curr = curr!.next
        }
        return curr?.data
    }

    getAtWhile(index: number) {

        if (index < 0 || index >= this.size) throw new Error("Index out of bound")

        let curr = this.head
        while (index--) {
            curr = curr!.next
        }
        return curr?.data
    }

}

// let dll = new DoublyLinkedList()
// dll.append(1)
// dll.append(2)
// dll.append(3)
// dll.append(4)
// dll.append(5)
// dll.deleteAt(1)
// dll.print()
// // dll.printReverse()
// dll.deleteAt(0)
// dll.print()
// // dll.printReverse()
// dll.deleteAt(0)
// dll.print()
// // dll.printReverse()
// dll.deleteAt(0)
// dll.print()
// // dll.printReverse()
// dll.deleteAt(0)
// console.log(dll.size);

// // // dll.deleteAt(4)
// // console.log(dll.getAt(0), dll.getAtWhile(0));
// // console.log(dll.getAt(1), dll.getAtWhile(1));
// // console.log(dll.getAt(2), dll.getAtWhile(2));
// // console.log(dll.getAt(3), dll.getAtWhile(3));
// // console.log(dll.getAt(4), dll.getAtWhile(4));
// // // console.log(dll.getAt(5));

// // // dll.deleteAt(3)
// // // dll.deleteAt(2)
// // // dll.deleteAt(1)
// dll.print()
// dll.printReverse()
