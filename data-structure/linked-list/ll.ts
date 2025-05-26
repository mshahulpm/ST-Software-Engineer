class LinkNode {

    data: any
    next: LinkNode | null

    constructor(value: any) {
        this.data = value
        this.next = null
    }
}

class LinkedList {

    head: LinkNode | null
    size = 0
    constructor(data: any) {
        this.head = new LinkNode(data)
        this.size++
    }

    prepend(data: any) {
        let newNode = new LinkNode(data)
        newNode.next = this.head
        this.head = newNode
        this.size++
    }

    append(data: any) {

        if (!this.head) {
            this.prepend(data)
            return
        }

        let newNode = new LinkNode(data)
        let curr = this.head

        while (curr!.next) {
            curr = curr.next
        }

        curr.next = newNode
        this.size++
    }

    insertAt(index: number, data: any) {
        let curr = this.head;
        let newNode = new LinkNode(data)
        if (index == 0) {
            newNode.next = curr;
            this.head = newNode;
            this.size++
            return;
        }
        if (index < 0 || index > this.size) throw Error("Index Out of Bound");
        while (--index) {
            curr = curr!.next
        }
        let tempVal = curr!.next;
        curr!.next = newNode;
        newNode.next = tempVal;
        this.size++
    }

    getAt(index: number) {
        if (index < 0 || index > this.size - 1) {
            throw Error("Index out of bound")
        }
        if (index == 0) return this.head?.data
        let curr = this.head
        while (index--) {
            curr = curr!.next
        }
        return curr?.data
    }

    print() {
        let curr = this.head
        let ll = ''
        while (curr) {
            ll += `${curr.data}->`
            curr = curr.next
        }
        ll += 'Null'
        console.log(ll);
    }

}

class LinkedListWithTail {

    head: LinkNode | null = null
    tail: LinkNode | null = null
    length = 0

    constructor() { }

    append(value: any) {
        let newNode = new LinkNode(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail!.next = newNode
            this.tail = newNode
        }
        this.length++
    }

    prepend(value: any) {
        let newNode = new LinkNode(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
    }

    print() {
        let values: any[] = []
        let current = this.head
        while (current) {
            values.push(current.data)
            current = current.next
        }
        console.log({
            length: this.length,
            values,
            head: this.head?.data,
            tail: this.tail?.data
        })
    }

    // delete the first occurrence of value
    delete(value: any) {

        if (!this.head) return

        if (value === this.head.data) {
            this.head = this.head.next
            if (!this.head) this.tail = null
            this.length--
            return
        }

        let current = this.head.next as any
        let prev = this.head
        while (current) {
            if (current.data === value) {
                prev!.next = current.next
                this.length--

                // update tail 
                if (this.tail === current) this.tail = prev
                return
            }
            prev = current
            current = current.next
        }
    }

    reverse() {
        if (this.length < 2) return
        let prev = null as any
        let curr = this.head
        let next = null as any
        while (curr) {
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        let neHead = this.tail
        this.tail = this.head
        this.head = neHead
    }

}


// let i = 5
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// while (i--) console.log(`index : ${i}, value : ${arr[i]}`);
