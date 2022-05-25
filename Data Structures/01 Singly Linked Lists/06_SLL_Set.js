/**
 * SINGLY LINKED LIST SET
 * 
 * Setting an item in a linked list to have a new value
 * 
 */

class SinglyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }

    push(val) {
        var newNode = new Node(val)

        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (this.length === 0) return undefined

        let current = this.head, newTail = current

        while (current.next) {
            newTail = current
            current = current.next
        }

        this.tail = newTail
        this.tail.next = null
        this.length--

        if (this.length === 0) {
            this.head = null, this.tail = null;
        }

        return current
    }

    shift() {
        if (this.length === 0) return undefined

        let current = this.head
        this.head = current.next
        this.length--

        if (this.length === 0) {
            this.tail = null
        }

        return current
    }

    unshift(val) {
        const newNode = new Node(val)

        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }

        this.length++

        return this
    }

    get(index) {
        if (index >= this.length || index < 0) {
            return null
        }

        let current = this.head, traversalCount = 0

        while (traversalCount !== index) {
            current = current.next
            traversalCount++
        }

        return current
    }

    set(index, val) {
        // Use **get** function to find the specific node
        let node = this.get(index)

        // if node is not found then return false,
        if (!node) return false

        // if node is found, set the value of that node to be the value passed to the function and return true
        node.val = val
        return true
    }
}

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const list = new SinglyLinkedList()

list.push(0)
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)

console.log('list', JSON.stringify(list), '\n')

list.set(4, 'howdy')

console.log('list with set', JSON.stringify(list))

