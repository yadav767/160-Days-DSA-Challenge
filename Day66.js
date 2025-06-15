
var findKthNode = function (temp, k) {
    k -= 1;
    while (temp != null && k > 0) {
        k--;
        temp = temp.next;
    }
    return temp;
}
var reverse = function (head) {
    let temp = head;
    let previous = null;
    while (temp != null) {
        let front = temp.next;
        temp.next = previous;
        previous = temp;
        temp = front;
    }
    return previous;


}

var reverseKGroup = function (head, k) {
    let temp = head;
    let nextNode = null;
    let previous = null;
    while (temp != null) {
        let kthNode = findKthNode(temp, k);
        if (kthNode == null) {
            if (previous) previous.next = temp;
            break;
        }
        nextNode = kthNode.next;
        kthNode.next = null;
        reverse(temp);
        if (temp == head) head = kthNode;
        else {
            previous.next = kthNode;

        }

        previous = temp;
        temp = nextNode;

    }
    return head;


};