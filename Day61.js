var middleNode = function (head) {

    let first = head;
    let second = head;
    while (second != null && second.next != null) {
        second = second.next.next;
        first = first.next;

    }
    return first;
}