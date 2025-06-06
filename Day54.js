class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class LinkedList {

    constructor() {
        this.head = null
        this.size = 0

    }
    insertNumber(val) {
        this.size++;
        const newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }
    printLL() {
        let temp = this.head;
        while (temp != null) {
            process.stdout.write(temp.val + " -> ");
            temp = temp.next;
        }
        console.log(null);
    }
}

let obj = new LinkedList();
obj.insertNumber(10)
obj.insertNumber(20)
obj.insertNumber(30)
obj.insertNumber(40)
obj.insertNumber(50)
obj.printLL()