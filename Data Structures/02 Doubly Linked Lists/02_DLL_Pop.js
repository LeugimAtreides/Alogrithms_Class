const { inspect } = require('util')
/**
 * DOUBLY LINKED LIST POP
 * 
 * Removing a node from the **end** of the Doubly Linked List
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

    pop() {
        let poppedNode = this.tail
        switch (this.length) {
            case 0:
                return undefined
            case 1:
                this.head = null
                this.tail = null
                this.length--
            default:
                this.tail = poppedNode.prev
                this.tail.next = null
                poppedNode.prev = null
                this.length--
                break;
        }
        return poppedNode
    }
}

class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

let DLL = new DoublyLinkedList()

DLL.push('My')
DLL.push('cat')
DLL.push('is')
DLL.push('fluffy')
DLL.push('and')
DLL.push('cute')
DLL.push('?')

console.log('DLL with seven items', inspect(DLL, true, DLL.length, 'blue'), '\n')

console.log('Popped Node', DLL.pop(), '\n')

console.log('DLL with popped item', inspect(DLL, true, DLL.length, 'blue'), '\n')