var addTwoNumbers = function (l1, l2) {
    let carry = 0;
    let dummy = new ListNode(-1);
    let temp = dummy;
    while (l1 != null || l2 != null) {
        let val1 = l1 == null ? 0 : l1.val;
        let val2 = l2 == null ? 0 : l2.val;
        let val = val1 + val2 + carry;
        carry = Math.floor(val / 10);
        let newNode = new ListNode(val % 10);
        temp.next = newNode;
        temp = temp.next;
        if (l1 != null) l1 = l1.next
        if (l2 != null) l2 = l2.next



    }
    if (carry > 0) {
        let newNode = new ListNode(carry);
        temp.next = newNode;

    }
    return dummy.next;

}   