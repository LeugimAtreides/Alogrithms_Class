/**
 * ES2015 CLASS SYNTAX
 * 
 * What is a Class?
 *  - A blueprint for creating objects with pre-defined properties and methods
 *  - JS doesn't really have classes. 'Syntatic Sugar' over JS existing prototype-based inheritance.
 *  - Classes are in fact 'Special Functions'
 * 
 * Why is this important?
 *  - Classes allow implementation of data structures
 * 
 * Syntax
 *  - Method to create new objects must be called **constructors**
 *  - Class keyword creates a constant so it cannot be redefined
 *  - Use **new** keyword to instantiate a class
 * 
 * Instance Methods
 *  - Methods provide functionality that pertains to a single instance of a class instance
 *  - These methods can return specific actions on the data present for a specific instantiation of a class, they can also update the data
 * 
 * Class Methods
 *  - Uses the **static** method this is a method that is used to create utility functions for a class usually and not related to a single instance
 */

class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
        this.tardies = 0
        this.scores = []
    }

    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`
    }

    markLate() {
        this.tardies += 1
        if (this.tardies >= 3) {
            return 'YOU ARE EXPELLED!'
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
    }

    addScore(score) {
        this.score.push(score)
    }

    calculateAverage() {
        let sum = this.scores.reduce(function (a, b) { return a + b })

        return sum / this.scores.length
    }

    static enrollStudents() {
        return 'ENROLLING STUDENTS'
    }
}

// better example of Class Methods

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy)
    }
}

const p1 = new Point(5, 5)

const p2 = new Point(10, 10)

console.log(`The distance between p2 and p1 is ${Point.distance(p1, p2)}`)