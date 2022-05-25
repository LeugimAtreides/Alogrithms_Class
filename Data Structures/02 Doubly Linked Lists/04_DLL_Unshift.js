const { inspect } = require('util')
/**
 * DOUBLY LINKED LIST UNSHIFT
 * 
 * Adding a node at the **beginning** of the DLL
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

    unshift(val) {
        switch (this.length) {
            case 0:
                this.push(val)
                this.length++
                break;
            default:
                let newHead = new Node(val)
                this.head.prev = newHead
                newHead.next = this.head
                this.head = newHead
                this.length++
                break;
        }

        return this
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

DLL.push('is')
DLL.push('my')
DLL.push('cat')
DLL.push('cute')
DLL.push('and')
DLL.push('fluffy')
DLL.push('?')

console.log('DLL with eight items', inspect(DLL, true, DLL.length, 'blue'), '\n')

console.log('Unshifted ', DLL.unshift('Erin'), '\n')

console.log('DLL with seven items', inspect(DLL, true, DLL.length, 'blue'), '\n')