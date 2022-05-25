/**
 * SINGLY LINKED LIST INSERT
 * 
 * Inserting a new value at a given position and reorganizing the list based on the insertion
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
        let node = this.get(index)

        if (!node) return false

        node.val = val
        return true
    }

    insert(index, val) {
        // if the index is less than zero or greater than the length, return false

        // if the index is the same as the length, push a new node to the end of the list

        // if the index is 0, unshift a new node to the start of the list
        // otherwise, using the get method, access the node at index -1
        if (index < 0 || index > this.length) return false

        if (index === this.length) {
            this.push(val)
            return true
        }

        if (index === 0) {
            this.push(val)
            return true
        }

        let newNode = new Node(val)

        let prev = this.get(index - 1)

        let temp = prev.next

        prev.next = newNode

        newNode.next = temp

        this.length++

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

list.insert(4, 'howdy')

console.log('list with set', JSON.stringify(list))

