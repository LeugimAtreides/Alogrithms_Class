/**
 * Objectives:
 *  - Define what a singly linked list is
 *  - Compare and contrast Linked Lists with Arrays
 *  - Implement insertion, removal, and traversal methods on SLL (Singly Linked Lists)
 * 
 * Definition:
 *  - A data structure that contains a **head**, **tail**, and **length** property, the middle items are not tracked
 *  - LL consist of nodes, and each **node** has a **value** and a **pointer** to another node or null
 * 
 * Comparison with Arrays
 *  - Lists
 *      - Do not have indexes
 *      - Connected via nodes with a **next** pointer
 *      - Random access is not allowed
 *  - Arrays
 *      - Indexed in order!
 *      - Insertion and deletion can be expensive
 *      - Can quickly be accessed at a specific index
 */

class SinglyLinkedList{
    constructor(){
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
}

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

var list = new SinglyLinkedList()

list.push(2)

console.log('list', list)

list.push(3)

console.log('list', list)