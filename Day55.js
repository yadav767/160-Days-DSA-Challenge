class Node {
    constructor(val) {
        this.val = val;
        this.next = null;

    }
}
class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
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
    insertNodeInLast(val) {
        this.size++;
        const lastNode = new Node(val);
        if (this.head.next == null) {
            this.head = newNode;
            return;
        }
        let temp = this.head;

        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = lastNode;
    }

    deleteAtFirst() {
        if (this.head == null) {
            console.log("List is empty!");
            return this.head;
        }
        this.size--;
        this.head = this.head.next;

    }

    insertAtIndex(val, index) {
        const newNode = new Node(val);
        if (index < 0 || index > this.size.length) {
            console.log("not possible");
            return;
        }
        if (this.head === null) {
            console.log("List is empty !");
            return this.head;
        }
        let temp = this.head;
        for (let i = 0; i < index - 1; i++) {
            temp = temp.next;
        }
        newNode.next = temp.next;
        temp.next = newNode;
    }

    deleteAtLast() {
        if (this.head === null) {
            console.log("List is empty !");
            return this.head;
        }
        this.size--;

        let temp = this.head;
        while (temp.next.next != null) {
            temp = temp.next;
        }
        temp.next = null

    }
}

let obj = new LinkedList();
obj.insertNumber(10)
obj.insertNumber(20)
obj.insertNumber(30)
obj.insertNumber(40)
obj.insertNumber(50)

// obj.printLL()
// obj.insertNodeInLast(70)
// obj.insertNodeInLast(80)
// obj.insertNodeInLast(90)
// obj.printLL()
// obj.deleteAtFirst()
// obj.printLL()
obj.insertAtIndex(45, -1);
obj.printLL();




