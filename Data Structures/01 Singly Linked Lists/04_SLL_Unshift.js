/**
 * SINGLY LINKED LIST UNSHIFT
 * 
 * Adding a new node to the beginning of the Linked List
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
        // create a new node using the value passed to the function
        const newNode = new Node(val)

        // if there is no head property on the list, set the head and tail to be the newly created node
        if (!this.head) {
            this.head = newNode
            this.tail = this.head

        } else {
            // Otherwise set the newly created node's next propertyto be the current head property on the list
            newNode.next = this.head

            // set the head property on the list to be that newly created node
            this.head = newNode
        }
        // increment the length of the list by 1
        this.length++

        // return the linked list
        return this
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

list.unshift(0)

console.log('list', JSON.stringify(list))