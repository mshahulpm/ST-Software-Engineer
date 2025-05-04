class ListNode {

    data: any
    next: ListNode | null

    constructor(value: any) {
        this.data = value
        this.next = null
    }
}

class LinkedList {

    head: ListNode | null = null
    tail: ListNode | null = null
    length = 0

    constructor() { }

    append(value: any) {
        let newNode = new ListNode(value)
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
        let newNode = new ListNode(value)
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
