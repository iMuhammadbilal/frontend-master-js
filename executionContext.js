// Everything in javascript happens inside the execution context  ----- NOTED

// you can asume this execution context like big box or a container in which whole javacript code executed

var n = 5;

function square(n) {
  var ans = n * n;
  return ans;
}

var square1 = square(n);
var square2 = square(8);  

console.log(square1)
console.log(square2)

// when first run this code then global execution context created
// and it has two components 

// 1 Memory component (or memory heap)
// 2 Code component (or code stack)

// this execution created two phases
// 1. Creation phase (or memory phase)
// 2. Execution phase (or code phase)




//Example 

var n = 5;

function square(n) {
  var ans = n * n;
  return ans;
}

var square1 = square(n);
var square2 = square(8);  

console.log(square1)
console.log(square2)

// In the above code,

// n is initialized and assigned a value of 5
// We defined a function square() that accepts an argument n and returns the square of n.
// We call the square() function and store the returned value in the square1 variable.
// We call the square() function and store the returned value in the square2 variable.
// Finally, it outputs both square1 and square2
// Behind the scenes, JavaScript is doing so many things. Let's understand all of it.


// Global Execution Context starts here

// console.log("Script Start");
// var name = "Abdulwahab";
// let age = 20; // let and const are not hoisted
// const country = "Pakistan"; // let and const are not hoisted 

// function greet() {
//   var greeting = "Hello";
//   console.log(greeting + " " + name);
// }

// greet(); // Function Execution Context created

// console.log("Script End");


console.log(`value of x is ${x}`);
var x = 10;

// different between variable declaration and variable initialization
// variable declaration is the process of creating a variable and giving it a name, but not assigning it a value.
// variable initialization is the process of assigning a value to a variable after it has been declared.
// Example:
var studentName; // variable declaration
studentName = "John"; // variable initialization
// variable assignment is the process of assigning a value to a variable after it has been declared and initialized.  
// Example:


console.log(`Global Execution Context Start`);

var globalVariable = "I am a global variable"; // Global variable

function globalFunction(){
  console.log(`inside global function`);
}

console.log(globalVariable);

globalFunction(); // Calling the global function

console.log(`Global Execution Context End`);


// NOTED POINTS
//  it handles everything to manage thisn  execution context creation and execution deletion and the controller of this execution context is manage a stack this is called call stack