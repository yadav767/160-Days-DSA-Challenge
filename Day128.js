//Leetcode Problem 328: Odd Even Linked List

var oddEvenList = function (head) {
    if (head == null || head.next == null) return head

    let odd = head;
    let even = head.next;
    let evenHead = head.next;
    while (even != null && even.next != null) {
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;

    }
    odd.next = evenHead;
    return head

};