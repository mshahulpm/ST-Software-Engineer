## Linked List
A linked list is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next.

### Advantages of a Linked List over Arrays

- **Dynamic Size**: One of the most significant advantages of linked list over arrays is that linked lists can grow or shrink dynamically during runtime. This means that the size of a linked list can be adjusted to accommodate new elements or remove existing elements without having to allocate or deallocate a fixed-size block of memory, as is the case with arrays.
- **Efficient Insertion and Deletion**: Linked lists allow efficient insertion and deletion of elements at any position in the list, whereas arrays require shifting of elements when a new element is added or removed, which can be slow and inefficient for large arrays.
- **Memory Efficiency**: Linked lists use memory more efficiently than arrays. In an array, all elements must be stored in contiguous memory locations, even if some of the elements are not used. In contrast, linked lists only allocate memory for the elements that are used, which can save memory in cases where the size of the data set is unknown or varies over time.
- **Easy Implementation of Abstract Data Types**: Linked lists are easy to use and implement when implementing abstract data types such as stacks, queues, and trees. These data structures require frequent insertion and deletion of elements, which is a task in which linked lists are well-suited.
- **More Efficient Sorting**: In some cases, linked lists can be more efficient for sorting algorithms than arrays. This is because linked lists do not require swapping elements like arrays, which can be time-consuming for large arrays.

### Disadvantages of a Linked List over Arrays

- **Random Access**: Linked lists do not provide random access to elements like arrays do. To access an element in a linked list, we have to start at the beginning of the list and traverse the list until we find the desired element. This makes accessing individual elements in a linked list slower than in an array.
- **Extra Memory Usage**: Linked lists require extra memory compared to arrays. Each element in a linked list requires a reference to the next element, which takes up additional memory space. In contrast, arrays only need memory to store the elements themselves.
- **More Complex Implementation**: Implementing a linked list is more complex than implementing an array because it requires managing pointers and dynamically allocating memory. This complexity can lead to more bugs and errors in the code.
In short, there are several disadvantages of linked list over arrays, such as slower access times, extra memory usage, and more complex implementation.


---

### 📊 Singly Linked List – Time Complexity Comparison (With vs Without `tail`)

| Operation                   | With `tail` | Without `tail` | Notes                                            |
| --------------------------- | ----------- | -------------- | ------------------------------------------------ |
| **Insert at head**          | `O(1)`      | `O(1)`         | Prepend: Constant time in both cases             |
| **Insert at tail (append)** | `O(1)`      | `O(n)`         | Without `tail`, must traverse to the end         |
| **Insert after value**      | `O(n)`      | `O(n)`         | Need to search for the value first               |
| **Lookup by index**         | `O(n)`      | `O(n)`         | No index-based access (linear traversal)         |
| **Search by value**         | `O(n)`      | `O(n)`         | Traverse from head until match                   |
| **Delete by value**         | `O(n)`      | `O(n)`         | Need to find and rewire pointers                 |
| **Delete head**             | `O(1)`      | `O(1)`         | Simply move `head` forward                       |
| **Delete tail**             | `O(n)`      | `O(n)`         | In both cases, must traverse to node before tail |
| **Reverse list**            | `O(n)`      | `O(n)`         | One pass with pointer rewiring                   |
| **Print all elements**      | `O(n)`      | `O(n)`         | Always linear                                    |

---

### 📦 Space Complexity for Both: `O(n)`

* Every node is an object with:

  * A `data` field
  * A `next` pointer
* Tail reference (if present) is just one additional pointer → **O(1)** overhead

---

### ✅ Summary

* `tail` gives you **O(1) insert-at-end**, which is a big win for use cases like queues or append-heavy structures.
* Without `tail`, it's **simpler**, but append is **slower** (`O(n)`).
