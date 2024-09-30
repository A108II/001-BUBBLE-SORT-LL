const LinkedList = require('./001');
// Helper function to convert linked list to an array
function linkedListToArray(list) {
  const arr = [];
  let current = list.head;
  while (current !== null) {
      arr.push(current.value);
      current = current.next;
  }
  return arr;
}

// Test #1: Sorts a list with multiple items
it('should sort a list with multiple items', () => {
  const list = new LinkedList(5);
  list.push(4);
  list.push(3);
  list.push(2);
  list.push(1);
  list.bubbleSort();
  expect(linkedListToArray(list)).toEqual([1, 2, 3, 4, 5]);
});

// Test #2: Sorts a list with negative numbers
it('should sort a list with negative numbers', () => {
  const list = new LinkedList(1);
  list.push(-1);
  list.push(3);
  list.push(-2);
  list.bubbleSort();
  expect(linkedListToArray(list)).toEqual([-2, -1, 1, 3]);
});

// Test #3: Sorts a list with a single item
it('should handle a list with a single item', () => {
  const list = new LinkedList(1);
  list.bubbleSort();
  expect(linkedListToArray(list)).toEqual([1]);
});

// Test #4: Sorts an empty list
it('should handle an empty list', () => {
  const list = new LinkedList(1);
  list.makeEmpty();
  list.bubbleSort();
  expect(linkedListToArray(list)).toEqual([]);
});

// Test #5: Sorts a list with duplicate items
it('should sort a list with duplicate items', () => {
  const list = new LinkedList(3);
  list.push(1);
  list.push(2);
  list.push(1);
  list.push(2);
  list.bubbleSort();
  expect(linkedListToArray(list)).toEqual([1, 1, 2, 2, 3]);
});

// Test #6: Sorts a list with already sorted items
it('should handle a list with already sorted items', () => {
  const list = new LinkedList(1);
  list.push(2);
  list.push(3);
  list.push(4);
  list.bubbleSort();
  expect(linkedListToArray(list)).toEqual([1, 2, 3, 4]);
});

// Test #7: Sorts a list with items in descending order
it('should sort a list with items in descending order', () => {
  const list = new LinkedList(5);
  list.push(4);
  list.push(3);
  list.push(2);
  list.push(1);
  list.bubbleSort();
  expect(linkedListToArray(list)).toEqual([1, 2, 3, 4, 5]);
});

// Test #8: Sorts a list with all the same items
it('should handle a list with all the same items', () => {
  const list = new LinkedList(1);
  list.push(1);
  list.push(1);
  list.push(1);
  list.bubbleSort();
  expect(linkedListToArray(list)).toEqual([1, 1, 1, 1]);
});
