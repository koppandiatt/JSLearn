// Task: Learn and practice working with arrays in JavaScript

/*
  Arrays are ordered lists of values.
  - Can store multiple values in a single variable
  - Are zero-indexed (first element is at position 0)
  - Can contain mixed data types
  - Have built-in methods for manipulation
*/

// Practice exercises:

// 1. Create an array of numbers
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// 2. Access array elements
console.log(numbers[0]); // First element
console.log(numbers[numbers.length - 1]); // Last element

// 3. Add elements to an array
numbers.push(6); // Adds to end
numbers.unshift(0); // Adds to beginning

// 4. Remove elements from an array
numbers.pop(); // Removes from end
numbers.shift(); // Removes from beginning

// 5. Find array length
console.log(numbers.length);

// 6. Loop through an array
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 7. Use forEach method
numbers.forEach(function(number) {
    console.log(number);
});

// 8. Array methods
let fruits = ["apple", "banana", "orange"];
console.log(fruits.indexOf("banana")); // Find position
console.log(fruits.includes("apple")); // Check if exists
console.log(fruits.join(", ")); // Convert to string

// Practice these patterns with different array types and methods