const { inspect } = require('util')
/**
 * DOUBLY LINKED LIST INTRO WITH PUSH
 * 
 * Like a singly linked lists but it has a pointer to the previous value as well as next value
 * 
 * DLL use up more memory but they allow for more flexibility
 * 
 * Push
 *  - Adds a new node to the end of a DLL
 */

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.length) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
}

class Node {
    constructor (val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

let DLL = new DoublyLinkedList()

DLL.push('My')

console.log('DLL with one item', JSON.stringify(DLL, null, ' '), '\n')

DLL.push('cat')
DLL.push('is')
DLL.push('fluffy')
DLL.push('and')
DLL.push('cute')

console.log('DLL with six items', inspect(DLL, true, DLL.length, 'blue'), '\n')