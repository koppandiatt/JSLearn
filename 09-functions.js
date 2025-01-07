// Task: Learn and practice functions in JavaScript

/*
  Functions are reusable blocks of code that perform specific tasks.
  Types of functions:
  - Function declarations
  - Function expressions
  - Arrow functions
  - Methods (functions inside objects)
  
  Basic structure:
  function functionName(parameter1, parameter2) {
    // code to execute
    return result;
  }
*/

// Practice exercises:

// 1. Create a basic function declaration
function greet() {
    console.log("Hello!");
}
greet(); // Call the function

// 2. Create a function with parameters
function greetPerson(name) {
    console.log("Hello, " + name + "!");
}
greetPerson("Alice");

// 3. Create a function that returns a value
function add(a, b) {
    return a + b;
}
let sum = add(5, 3);
console.log(sum); // 8

// 4. Function expression (anonymous function)
let multiply = function(x, y) {
    return x * y;
};
console.log(multiply(4, 2)); // 8

// 5. Arrow function
let divide = (a, b) => a / b;
console.log(divide(10, 2)); // 5

// 6. Function with multiple parameters and default values
function createUser(name, age = 20, country = "Unknown") {
    return {
        name: name,
        age: age,
        country: country
    };
}
console.log(createUser("Bob", 25, "USA"));
console.log(createUser("Alice")); // Uses default values

// 7. Function with rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// 8. Function returning multiple values using an object
function calculateCircle(radius) {
    return {
        area: Math.PI * radius * radius,
        circumference: 2 * Math.PI * radius
    };
}
let circle = calculateCircle(5);
console.log(circle.area, circle.circumference);

// 9. Callback function
function processUser(name, callback) {
    let user = name.toUpperCase();
    callback(user);
}
processUser("john", function(name) {
    console.log("Processed:", name);
});

// 10. Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("This function runs immediately!");
})();

// Practice these patterns with different scenarios and parameters 