/**
 * SINGLY LINKED LIST GET
 * 
 * Retrieving an item based on an input that is a positition in the list
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
        // if the index is less than zero or greater than or equal to the length of the list, return null
        if (index >= this.length || index < 0) {
            return null
        }
        
        let current = this.head, traversalCount = 0

        // Loop through the list until you reach the index and return the node at that specfic index
        while(traversalCount !== index) {
            current = current.next
            traversalCount++
        }

        return current
    }
}

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const list = new SinglyLinkedList()

list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)

console.log('list', JSON.stringify(list))

console.log('get position 2', list.get(2))