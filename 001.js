class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const new_node = new Node(value);
    this.head = new_node;
    this.tail = new_node;
    this.length = 1;
  }

  push(value) {
    const new_node = new Node(value)
    if (!this.head) {
      this.head = new_node;
      this.tail = new_node;
    }

    else {
      this.tail.next = new_node;
      this.tail = new_node;
    }

    this.length++;
    return this;

  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.next = 0;
  }

  bubbleSort() {
    if (this.length < 2) return;
    let sortedToThisPoint = null;
    while (sortedToThisPoint !== this.head.next) {
      let current = this.head;
      while (current.next !== sortedToThisPoint) {
        if (current.value > current.next.value) {
          let temp = current.value;
          current.value = current.next.value;
          current.next.value = temp;
        }
        current = current.next;
      }
      sortedToThisPoint = current;
    }
  }
}

module.exports = LinkedList;