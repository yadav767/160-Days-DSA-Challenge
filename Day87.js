//24. Swap Nodes in Pairs.

var swapPairs = function (head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let previous = dummy;

    while (previous.next != null && previous.next.next != null) {
        let first = previous.next;
        let second = previous.next.next;
        previous.next = second
        first.next = second.next
        second.next = first;
        previous = first;
    }
    return dummy.next;

}