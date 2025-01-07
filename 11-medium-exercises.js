/*
Exercise 21: Find Min and Max
Write a function that takes an array of numbers and returns both the minimum
and maximum values in a single pass through the array.
Example:
Input: [23, 1, 45, 78, 9]
Output: [1, 78]
*/
function findMinMax(numbers) {
    // implementation here
}
console.log(findMinMax([23, 1, 45, 78, 9]));     // [ 1, 78 ]
console.log(findMinMax([-10, 5, -3, 100, 0]));   // [ -10, 100 ]
console.log(findMinMax([42]));                   // [ 42, 42 ]

/*
Exercise 22: Password Strength Checker
Create a function that checks password strength based on criteria:
- At least 8 characters long
- Contains at least one uppercase letter
- Contains at least one lowercase letter
- Contains at least one number
- Contains at least one special character (!@#$%^&*)
Returns: 'weak', 'medium', or 'strong' based on how many criteria are met
(weak: 2 or less, medium: 3-4, strong: all 5)
*/
function checkPasswordStrength(password) {
    // implementation here
}
console.log(checkPasswordStrength("pass123"));        // 'weak'
console.log(checkPasswordStrength("Password123"));    // 'medium'
console.log(checkPasswordStrength("P@ssw0rd!"));     // 'strong'

/*
Exercise 23: Array Chunking
Write a function that splits an array into smaller arrays of a specified size.
Example:
Input: ([1, 2, 3, 4, 5], 2)
Output: [[1, 2], [3, 4], [5]]
*/
function chunkArray(array, size) {
    // implementation here
}
console.log(chunkArray([1, 2, 3, 4, 5], 2));     // [[1, 2], [3, 4], [5]]
console.log(chunkArray([1, 2, 3, 4, 5, 6], 3));  // [[1, 2, 3], [4, 5, 6]]
console.log(chunkArray([1, 2, 3], 1));           // [[1], [2], [3]]

/*
Exercise 24: Time Converter
Create a function that converts a time string in 24-hour format to 12-hour format.
Example:
Input: "14:30"
Output: "2:30 PM"
Edge cases: handle "00:00" (12:00 AM) and "12:00" (12:00 PM)
*/
function convertTime(timeString) {
    // implementation here
}
console.log(convertTime("14:30"));   // "2:30 PM"
console.log(convertTime("00:00"));   // "12:00 AM"
console.log(convertTime("12:00"));   // "12:00 PM"
console.log(convertTime("23:59"));   // "11:59 PM"

/*
Exercise 25: Word Frequency Counter
Create a function that takes a string and returns a 2D array where each subarray
contains a word and its frequency. Sort by frequency (highest first).
Example:
Input: "the quick brown fox jumps over the lazy dog the dog sleeps"
Output: [["the", 3], ["dog", 2], ["quick", 1], ["brown", 1], ...]
*/
function wordFrequencyArray(text) {
    // implementation here
}
console.log(wordFrequencyArray("the quick brown fox jumps over the lazy dog the dog sleeps")); // [["the", 3], ["dog", 2], ["quick", 1], ["brown", 1], ...]
console.log(wordFrequencyArray("hello HELLO Hello hi hi"));  // [["hello", 3], ["hi", 2]]


/*
Exercise 26: Credit Card Masker
Create a function that masks all but the last 4 digits of a credit card number.
Replace all other digits with '#'.
Example:
Input: "4556364607935616"
Output: "############5616"
Note: Should work with different length numbers and preserve spaces if present
*/
function maskCreditCard(cardNumber) {
    // implementation here
}
console.log(maskCreditCard("4556364607935616"));      // "############5616"
console.log(maskCreditCard("5555 5555 5555 4444"));   // "#### #### #### 4444"
console.log(maskCreditCard("123456789"));             // "#####6789"

/*
Exercise 27: Array Intersection
Write a function that finds the intersection of two arrays.
Return an array containing elements that appear in both arrays.
Example:
Input: [1, 2, 3, 4, 5], [4, 5, 6, 7, 8]
Output: [4, 5]
*/
function findIntersection(arr1, arr2) {
    // implementation here
}
console.log(findIntersection([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]));     // [4, 5]
console.log(findIntersection([1, 2, 3], [4, 5, 6]));                  // []
console.log(findIntersection([1, 2, 2, 3], [2, 2, 3, 4]));           // [2, 3]

/*
Exercise 28: RGB to Hex Converter
Create a function that converts RGB color values to hexadecimal format.
Each parameter should be in range 0-255.
Example:
Input: (255, 128, 0)
Output: "#FF8000"
*/
function rgbToHex(r, g, b) {
    // implementation here
}
console.log(rgbToHex(255, 128, 0));    // "#FF8000"
console.log(rgbToHex(0, 0, 0));        // "#000000"
console.log(rgbToHex(148, 0, 211));    // "#9400D3"

/*
Exercise 29: Deep Object Clone
Write a function that creates a deep clone of an object,
handling nested objects and arrays.
Example:
Input: { a: 1, b: { c: 2, d: [3, 4] } }
Output: new object with same structure but different reference
*/
function deepClone(obj) {
    // implementation here
}
const original = { a: 1, b: { c: 2, d: [3, 4] } };
console.log(deepClone(original));  // { a: 1, b: { c: 2, d: [3, 4] } }
console.log(deepClone({ x: [1, 2], y: { z: [3] } }));  // { x: [1, 2], y: { z: [3] } }

/*
Exercise 30: Calendar Week Generator
Create a function that generates an array of dates for a week,
given any date as input.
Example:
Input: "2024-03-15"
Output: Array of 7 dates starting from the Monday of that week
*/
function getWeekDates(dateString) {
    // implementation here
}
console.log(getWeekDates("2024-03-15"));  // Array of dates from 2024-03-11 to 2024-03-17
console.log(getWeekDates("2024-01-01"));  // Array of dates from 2023-12-30 to 2024-01-05

/*
Exercise 31: String Pattern Matcher
Write a function that checks if a string matches a pattern.
Pattern can contain letters and '*' which matches any sequence.
Example:
Input: "hello", "h*o"
Output: true (matches because h[ell]o matches pattern h*o)
*/
function matchPattern(str, pattern) {
    // implementation here
}
console.log(matchPattern("hello", "h*o"));        // true
console.log(matchPattern("hello", "h*l*o"));      // true
console.log(matchPattern("world", "w*d"));        // true
console.log(matchPattern("hi", "h*x"));           // false

/*
Exercise 32: Array Rotation
Create a function that rotates elements of an array by a given number of positions.
Positive numbers rotate right, negative numbers rotate left.
Example:
Input: [1, 2, 3, 4, 5], 2
Output: [4, 5, 1, 2, 3]
*/
function rotateArray(arr, positions) {
    // implementation here
}
console.log(rotateArray([1, 2, 3, 4, 5], 2));   // [4, 5, 1, 2, 3]
console.log(rotateArray([1, 2, 3], -1));        // [2, 3, 1]
console.log(rotateArray([1, 2, 3, 4], 4));      // [1, 2, 3, 4]

/*
Exercise 33: Time Range Overlap
Write a function that determines if two time ranges overlap.
Each range is represented as an array of two 24-hour format strings.
Example:
Input: ["09:00", "11:00"], ["10:30", "12:00"]
Output: true
*/
function hasTimeOverlap(range1, range2) {
    // implementation here
}
console.log(hasTimeOverlap(["09:00", "11:00"], ["10:30", "12:00"]));  // true
console.log(hasTimeOverlap(["09:00", "10:00"], ["10:00", "11:00"]));  // false
console.log(hasTimeOverlap(["14:00", "16:00"], ["13:00", "15:30"]));  // true

/*
Exercise 34: Object Path Finder
Create a function that finds a value in a nested object using a string path.
Path elements are separated by dots.
Example:
Input: {a: {b: {c: 42}}}, "a.b.c"
Output: 42
*/
function getValueByPath(obj, path) {
    // implementation here
}
const testObj = { a: { b: { c: 42 } } };
console.log(getValueByPath(testObj, "a.b.c"));           // 42
console.log(getValueByPath(testObj, "a.b"));            // { c: 42 }
console.log(getValueByPath(testObj, "a.b.d"));          // undefined

/*
Exercise 35: Matrix Spiral
Write a function that creates a spiral matrix of size n×n.
Start from 1 in the center and spiral outward.
Example:
Input: 3
Output: [
  [7, 8, 9],
  [6, 1, 2],
  [5, 4, 3]
]
*/
function createSpiralMatrix(n) {
    // implementation here
}
console.log(createSpiralMatrix(3));  
// [[7, 8, 9], [6, 1, 2], [5, 4, 3]]
console.log(createSpiralMatrix(2));  
// [[4, 1], [3, 2]]

/*
Exercise 36: String Compression
Create a function that performs basic string compression using counts
of repeated characters.
Example:
Input: "AABBBCCCC"
Output: "A2B3C4"
Note: If compressed string is not smaller, return original string
*/
function compressString(str) {
    // implementation here
}
console.log(compressString("AABBBCCCC"));     // "A2B3C4"
console.log(compressString("WWWWWWWWWWWW"));  // "W12"
console.log(compressString("AB"));            // "AB"

/*
Exercise 37: Balanced Brackets
Write a function that determines if a string of brackets is balanced.
Should work with (), [], and {}.
Example:
Input: "([{}])"
Output: true
*/
function isBalanced(str) {
    // implementation here
}
console.log(isBalanced("([{}])"));    // true
console.log(isBalanced("([)]"));      // false
console.log(isBalanced("{[]}()"));    // true
console.log(isBalanced("((()"));      // false

/*
Exercise 38: Calendar Month Generator
Create a function that generates a calendar month array given
a year and month. Include previous/next month's overflow dates.
Example:
Input: 2024, 3 (March)
Output: 6-week array with dates including overflow from Feb/Apr
*/
function generateMonth(year, month) {
    // implementation here
}
console.log(generateMonth(2024, 3));  // 6-week array for March 2024
console.log(generateMonth(2024, 2));  // 6-week array for February 2024

/*
Exercise 39: String Multiplication
Implement multiplication of two large numbers represented as strings.
Don't convert to numbers (numbers might be too large).
Example:
Input: "123", "456"
Output: "56088"
*/
function multiplyStrings(num1, num2) {
    // implementation here
}
console.log(multiplyStrings("123", "456"));     // "56088"
console.log(multiplyStrings("999", "999"));     // "998001"
console.log(multiplyStrings("0", "52"));        // "0"

/*
Exercise 40: Date Formatter
Create a function that formats a date according to a given pattern.
Support patterns like 'YYYY-MM-DD', 'DD/MM/YYYY', 'MMM DD, YYYY', etc.
Example:
Input: new Date(2024, 2, 15), "YYYY-MM-DD"
Output: "2024-03-15"
*/
function formatDate(date, pattern) {
    // implementation here
}
console.log(formatDate(new Date(2024, 2, 15), "YYYY-MM-DD"));     // "2024-03-15"
console.log(formatDate(new Date(2024, 2, 15), "DD/MM/YYYY"));     // "15/03/2024"
console.log(formatDate(new Date(2024, 2, 15), "MMM DD, YYYY"));   // "Mar 15, 2024"