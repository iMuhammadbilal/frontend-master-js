// IIFE function in JavaScript

// definition

// // IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it is defined. It is a design pattern in JavaScript that allows you to create a private scope for your variables and functions, preventing them from polluting the global scope.

// IIFE use for creating private scope and avoiding global scope pollution

// IIFE is a function that is executed immediately after it is defined

// real world example of IIFE

// use case of iife in real life example of IIFE
// IIFE is used to create a private scope for variables and functions, preventing them from polluting the global scope

(function () {
        console.log("I'm an IIFE!"); // Output: I'm an IIFE!
    })();

// IIFE is a way to create a private scope for variables and functions, preventing them from polluting the global scope


// 🧠 Without IIFE — BAD PRACTICE:
let count = 0;
function increment() {
  count++;
  console.log("You clicked", count, "times");
}

increment(); // Output: You clicked 1 times
increment(); // Output: You clicked 2 times
increment(); // Output: You clicked 3 times
increment(); // Output: You clicked 4 times
increment(); // Output: You clicked 5 times



// ✅ With IIFE — Good Practice:
(function () {
    let count = 0;
  
    document.getElementById("btn").addEventListener("click", function () {
      count++;
      console.log("You clicked", count, "times");
    });
  })();
  