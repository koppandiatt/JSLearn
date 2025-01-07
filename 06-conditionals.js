// Task: Learn and practice conditional statements in JavaScript

/*
  Conditional statements help us make decisions in code.
  - if: executes code if a condition is true
  - else if: checks another condition if the previous was false
  - else: executes when no conditions are true
  
  Structure:
  if (condition) {
    // code to run if condition is true
  } else if (another condition) {
    // code to run if another condition is true
  } else {
    // code to run if no conditions are true
  }
*/

// Practice exercises:

// 1. Create an if statement that checks if age is greater than or equal to 18
let age = 20;
if (age >= 18) {
    console.log("You are an adult");
}

// 2. Create an if-else statement that checks if a number is positive or negative
let number = -5;
if (number > 0) {
    console.log("Positive number");
} else {
    console.log("Negative number");
}

// 3. Create an if-else-if statement that assigns a grade based on score
// A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// Practice these patterns with different variables and conditions 