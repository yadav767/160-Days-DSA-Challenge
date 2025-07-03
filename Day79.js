//19. Remove Nth Node From End of List.


var removeNthFromEnd = function (head, n) {

    let temp = head;
    let length = 0;
    while (temp != null) {
        length++;
        temp = temp.next;
    }
    if (n === length) return head = head.next;
    let current = head;
    for (let i = 1; i < length - n; i++) {
        current = current.next;
    }
    current.next = current.next.next;
    return head;
}