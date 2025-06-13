var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode(-1);
    let temp = dummy;
    while (list1 != null && list2 != null) {
        if (list1.val < list2.val) {
            temp.next = list1;
            temp = temp.next;
            list1 = list1.next;
        }
        else {
            temp.next = list2;
            temp = temp.next;
            list2 = list2.next;
        }
    }
    if (list1 != null) temp.next = list1;
    else temp.next = list2

    return dummy.next;
}