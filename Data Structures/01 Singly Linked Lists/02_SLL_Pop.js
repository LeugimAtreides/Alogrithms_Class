/**
 * SINGLY LINKED LIST POP
 * 
 * Removing a node from the end of the Linked List
 * 
 * Takes the tail and returns it to us and removes it from the list
 * 
 * To remove a tail a new tail must be assigned from the second to last item
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
        // if no nodes, return undefined
        if (this.length === 0) return undefined

        let current = this.head, newTail = current

        // loop through list until you reach tail
        while (current.next) {
            newTail = current
            current = current.next
        }

        // set the tail to be the 2nd to last node
        this.tail = newTail
        // set the next property of the 2nd to last node to be null
        this.tail.next = null
        // decrement list by 1
        this.length--
        if (this.length === 0) {
            this.head = null, this.tail = null;
        }
        // return value of node to be removed
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

console.log('list', list)

list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)

console.log('list', JSON.stringify(list))

list.pop()

console.log('list', JSON.stringify(list))