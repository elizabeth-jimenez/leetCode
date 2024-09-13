class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if(this.minStack.length === 0) {
            this.minStack.push(val);
        } else {
            this.minStack.push(Math.min(val, this.minStack[this.minStack.length - 1]));
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
    // i listened to the solution before trying to implement 
}

const minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(0);
console.log(minStack.getMin()); // return 0
minStack.pop();
console.log(minStack.top());    // return 2
console.log(minStack.getMin()); // return 1