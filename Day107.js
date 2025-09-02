//LeetCode 234. Palindrome Linked List

var reverseLinkedList = function (head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        let nextNode = curr.next; // Save next node
        curr.next = prev;         // Reverse pointer
        prev = curr;              // Move prev forward
        curr = nextNode;          // Move curr forward
    }

    return prev; // New head of reversed list
};
var isPalindrome = function (head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    };
    let newHead = reverseLinkedList(slow.next);
    let first = head;
    let second = newHead;
    while (second != null) {
        if (first.val != second.val) {
            reverseLinkedList(newHead);
            return false;
        }
        first = first.next;
        second = second.next;
    }
    reverseLinkedList(newHead)
    return true



};