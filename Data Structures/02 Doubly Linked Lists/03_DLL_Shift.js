const { inspect } = require('util')
/**
 * DOUBLY LINKED LIST SHIFT
 * 
 * Removing a node from the **beginning** of the DLL
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
                break
            default:
                this.tail = poppedNode.prev
                this.tail.next = null
                poppedNode.prev = null
                this.length--
                break
        }
        return poppedNode
    }

    shift() {
        let shiftNode = this.head
        switch (this.length) {
            case 0:
                return undefined
            case 1:
                this.head = null
                this.tail = null
                this.length--
                break
            default:
                this.head = shiftNode.next
                this.head.prev = null
                shiftNode.next = null
                this.length--
                break
        }
        return shiftNode
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

DLL.push('Erin,')
DLL.push('is')
DLL.push('my')
DLL.push('cat')
DLL.push('cute')
DLL.push('and')
DLL.push('fluffy')
DLL.push('?')

console.log('DLL with eight items', inspect(DLL, true, DLL.length, 'blue'), '\n')

console.log('Shifted ', DLL.shift(), '\n')

console.log('DLL with seven items', inspect(DLL, true, DLL.length, 'blue'), '\n')