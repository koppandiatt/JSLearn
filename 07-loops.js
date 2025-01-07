// Task: Learn and practice loops in JavaScript

/*
  Loops are used to execute code multiple times.
  Types of loops:
  - for: runs a specific number of times
  - while: runs while a condition is true
  - do-while: runs at least once, then while condition is true
  
  for loop structure:
  for (initialization; condition; increment/decrement) {
    // code to repeat
  }
*/

// Practice exercises:

// 1. Create a for loop that counts from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 2. Create a while loop that counts down from 5 to 1
let counter = 5;
while (counter > 0) {
    console.log(counter);
    counter--;
}

// 3. Create a do-while loop that runs at least once
let x = 1;
do {
    console.log("This runs at least once");
    x++;
} while (x <= 3);

// 4. Create a for loop that prints even numbers from 0 to 10
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

// Practice these patterns with different ranges and conditions 