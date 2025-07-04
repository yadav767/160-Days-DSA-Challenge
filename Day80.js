var deleteDuplicates = function (head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let current = head;
    let previous = dummy;
    while (current != null) {
        if (current.next != null && current.val === current.next.val) {
            let duplicateVal = current.val;

            while (current != null && current.val === duplicateVal) {
                current = current.next;
            }


            previous.next = current;

        }

        else {
            current = current.next;
            previous = previous.next;
        }
    }


    return dummy.next;

}