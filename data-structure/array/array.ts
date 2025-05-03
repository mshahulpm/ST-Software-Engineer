// custom array implementation 

class MyArray {

    private data: any
    private length: number

    constructor(size = 0) {
        this.data = {}
        this.length = size
    }

    push(item: any) {
        this.data[this.length] = item
        this.length++
    }

    pop() {
        let lastItem = this.data[this.length - 1]
        if (!lastItem) return lastItem
        delete this.data[this.length - 1]
        this.length--
        return lastItem
    }

    shift() {
        let firstItem = this.data[0]
        for (let i = 0; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--
        return firstItem
    }

    print() {
        console.log({
            length: this.length,
            data: this.data
        });

    }

}

const a = new MyArray()

a.push(1)
a.push(2)
a.push(3)
a.print()
a.shift()
a.shift()
a.print()

