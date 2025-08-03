//  203. Remove Linked List Elements.

var removeElements = function (head, val) {
    if (head == null) {
        return null;
    }
    head.next = removeElements(head.next, val);
    if (head.val == val) {
        return head.next;
    }
    else {
        return head;
    }

};