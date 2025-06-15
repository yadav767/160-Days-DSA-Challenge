var reverseList = function (head) {
    let temp = head;
    let previous = null;
    while (temp != null) {
        let front = temp.next;
        temp.next = previous;
        previous = temp;
        temp = front;

    }
    return previous;

};
