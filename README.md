```markdown
## Bubble Sort of Linked List

### Instructions
Implement the bubble sort algorithm in a singly linked list. The linked list will contain integer elements. You need to write a method `bubbleSort()` within the `LinkedList` class. This method will sort the linked list in ascending order using the Bubble Sort algorithm.

### Overview of Bubble Sort Algorithm
The Bubble Sort algorithm works by comparing each pair of adjacent elements in the list and swapping them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

### Steps to Implement Bubble Sort
1. **Check Length**: Check if the length of the linked list is less than 2. If it is, the list is already sorted, so the method should return immediately.
   
2. **Initialize Marker**: Initialize a Node object `sortedUntil` to null. This will act as a marker to the end of the sorted portion of the list.

3. **Outer Loop**: Set up a while loop that continues as long as `sortedUntil` does not equal the second node in the list (`this.head.next`).

4. **Inner Loop**: Within this loop, start from the head of the list and compare the value of the current node with the value of the next node.

5. **Swap Values**: If the value of the current node is greater than the value of the next node, swap the values.

6. **Continue Comparing**: Continue comparing and swapping until you reach the node before `sortedUntil`.

7. **Update Marker**: At the end of each pass through the list, set `sortedUntil` to the last node that was examined. This marks the end of the sorted portion of the list and the start of the unsorted portion for the next pass.

8. **Repeat**: The algorithm continues until the list is fully sorted.
```