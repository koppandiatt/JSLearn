// =====================================================
// INTRODUCTION TO DATA STRUCTURES IN JAVASCRIPT
// =====================================================

/*
What are Data Structures?
- They are different ways to organize and store data
- Like containers that hold data in specific formats
- Each type has its own strengths and use cases

Real World Analogies:
- Array = Bookshelf (items in order)
- Object = Filing cabinet (labeled items)
- Stack = Stack of plates (last in, first out)
- Queue = Line at a store (first in, first out)
*/

// =====================================================
// 1. ARRAYS (Advanced Usage)
// =====================================================

// Arrays are ordered collections
let fruits = ["apple", "banana", "orange"];

// Common Array Methods
console.log("=== Array Methods ===");

// Finding Elements
const numbers = [1, 2, 3, 4, 5, 2];
console.log(numbers.indexOf(2)); // 1 (first occurrence)
console.log(numbers.lastIndexOf(2)); // 5 (last occurrence)
console.log(numbers.find((num) => num > 3)); // 4 (first element that satisfies condition)
console.log(numbers.filter((num) => num > 3)); // [4, 5] (all elements that satisfy condition)

// Transforming Arrays
const doubled = numbers.map((num) => num * 2); // [2, 4, 6, 8, 10, 4]
const sum = numbers.reduce((total, num) => total + num, 0); // 17

// Real-World Example: Todo List
const todos = [
  { id: 1, task: "Learn JS", completed: true },
  { id: 2, task: "Learn React", completed: false },
];

// Finding incomplete tasks
const incompleteTasks = todos.filter((todo) => !todo.completed);

// =====================================================
// 2. OBJECTS (Advanced Usage)
// =====================================================

// Objects store key-value pairs
const user = {
  name: "John",
  age: 25,
  hobbies: ["reading", "gaming"],
  address: {
    street: "123 Main St",
    city: "Boston",
  },
};

// Object Methods
console.log("=== Object Methods ===");
console.log(Object.keys(user)); // ['name', 'age', 'hobbies', 'address']
console.log(Object.values(user)); // ['John', 25, [...], {...}]
console.log(Object.entries(user)); // [['name', 'John'], ['age', 25], ...]

// Real-World Example: Product Catalog
const product = {
  id: "p1",
  name: "Laptop",
  price: 999.99,
  specs: {
    cpu: "Intel i5",
    ram: "8GB",
    storage: "256GB",
  },
  getDiscountedPrice(discount) {
    return this.price * (1 - discount);
  },
};

// =====================================================
// 3. SETS
// =====================================================

// Sets store unique values
console.log("=== Sets ===");

const uniqueNumbers = new Set([1, 1, 2, 2, 3, 3]);
console.log(uniqueNumbers); // Set(3) {1, 2, 3}

// Real-World Example: Unique Users
const userEmails = new Set();
userEmails.add("john@example.com");
userEmails.add("jane@example.com");
userEmails.add("john@example.com"); // Won't add duplicate

console.log(userEmails.has("john@example.com")); // true
console.log(userEmails.size); // 2

// =====================================================
// 4. MAPS
// =====================================================

// Maps are key-value pairs (any type can be a key)
console.log("=== Maps ===");

const userPreferences = new Map();
userPreferences.set("theme", "dark");
userPreferences.set("fontSize", 14);

// Real-World Example: User Sessions
const userSessions = new Map();
const user1 = { id: 1, name: "John" };
const user2 = { id: 2, name: "Jane" };

userSessions.set(user1, { loginTime: "2024-03-20", status: "active" });
userSessions.set(user2, { loginTime: "2024-03-21", status: "idle" });

// =====================================================
// 5. STACK Implementation
// =====================================================

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// Real-World Example: Browser History
const history = new Stack();
history.push("page1.html");
history.push("page2.html");
console.log(history.pop()); // Returns 'page2.html'

// =====================================================
// 6. QUEUE Implementation
// =====================================================

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// Real-World Example: Print Queue
const printQueue = new Queue();
printQueue.enqueue({ document: "report.pdf", pages: 5 });
printQueue.enqueue({ document: "letter.doc", pages: 2 });
console.log(printQueue.dequeue()); // Prints first document

// =====================================================
// 7. Simple Linked List
// =====================================================

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Real-World Example: Playlist
const playlist = new LinkedList();
playlist.append({ song: "Song 1", duration: "3:45" });
playlist.append({ song: "Song 2", duration: "4:30" });
playlist.print();

/*
BEST PRACTICES:
1. Choose the right structure for your needs:
   - Arrays: ordered data, frequent access by index
   - Objects: when you need named properties
   - Sets: when you need unique values
   - Maps: when you need key-value pairs with non-string keys
   - Stacks: LIFO operations (undo/redo)
   - Queues: FIFO operations (processing tasks in order)

2. Consider performance implications:
   - Arrays: slow for insertions/deletions in middle
   - Objects: fast for property access
   - Sets/Maps: fast for checking existence

3. Use built-in methods when possible
4. Keep data structures as simple as needed
5. Document complex operations
*/
