/**
 * SINGLY LINKED LIST SHIFT
 * 
 * Removing a node from the beginning of the Linked List
 * 
 * Takes the head and returns it to us and removes it from the list
 * 
 * To remove a head a new head must be assigned from the second item in the list
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
        // if there are no nodes, return undefined
        if (this.length === 0) return undefined
        
        // Store the current head property in a var
        let current = this.head
        
        // set head property to be the current heads next property
        this.head = current.next
        
        // decrement length by 1
        this.length--

        // set tail to null shift removes last item
        if (this.length === 0) {
            this.tail = null
        }
        
        // return value of the node removed
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

list.shift()

console.log('list', JSON.stringify(list))