// Task: Practice string concatenation and properties

// 1. Define a variable firstName = "John"
let firstName = "John";

// 2. Define a variable lastName = "Doe"
let lastName = "Doe";

// 3. Concatenate firstName and lastName into a variable fullName
let fullName = firstName + " " + lastName;

// 4. Define a variable greeting that says "Hello, [fullName]!"
let greeting = "Hello, " + fullName + "!";
// result: Hello, John Doe!

// length of a string
let nameLength = fullName.length; // 8

// accessing individual characters
let firstChar = fullName[0]; // J
let lastChar = fullName[nameLength - 1]; // e
// Note: Strings are zero-indexed, the array index starts from 0
// so the string is basically an array of characters ["J", "o", "h", "n", " ", "D", "o", "e"]

// Important helper methods
let str = "Hello, World!";
let position = str.indexOf("World"); // 7 - returns the position of the first occurrence
let upperCase = str.toUpperCase(); // "HELLO, WORLD!"
let lowerCase = str.toLowerCase(); // "hello, world!"
let replaced = str.replace("World", "JavaScript"); // "Hello, JavaScript!"
let sliced = str.slice(7, 12); // "World" - extracts a part of a string
let splitted = str.split(","); // ["Hello", " World!"] - splits a string into an array by a separator
let trimmed = str.trim(); // "Hello, World!" - removes whitespace from both ends
// Note: Strings are immutable, meaning that they cannot be changed once created
// any method that modifies a string actually returns a new string
// that's why we need to assign it to a new variable or the same variable