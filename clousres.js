// defination of closure in javascript
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

// In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.


//A function with some preserved values creates a closure

//A clouser is a created when a function preserves variables outside of its scope




// use function and modify the value of name

function show(){
    let name = "John";
    console.log(name);
}

var n = 5;



//  real world example of closure
function makeCounter() {
    let count = 0; // This variable is a closure

    return function() {
        count += 1; // Increment the closure variable
        return count; // Return the updated value
    };
}

const counter = makeCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
console.log(counter()); // Output: 4
console.log(counter()); // Output: 5


// Create real life example of clouser book libray system book are private and not possible to change book and someone to change the book then apply if statement string lenght 


function createLibrary() {
    let books = []; // This variable is a closure

    return {
        addBook: function(title) {
            if (typeof title === 'string' && title.length > 0) {
                books.push(title); // Add the book to the closure variable=
                console.log(`Book "${title}" added to the library.`);
            } else {
                console.log("Invalid book title. Please provide a non-empty string.");
            }
        },
        getBooks: function() {
            return books;
    },
        removeBook: function(title) {
            const index = books.indexOf(title);
            if (index > -1) {
                books.splice(index, 1); // Remove the book from the closure variable
                console.log(`Book "${title}" removed from the library.`);
            } else {
                console.log(`Book "${title}" not found in the library.`);
            }
        }
    };
}
const library = createLibrary();
library.addBook("The Great Gatsby"); // Output: Book "The Great Gatsby" added to the library.
library.addBook("To Kill a Mockingbird"); // Output: Book "To Kill a Mockingbird" added to the library.
library.addBook("Atomic Habits"); // Output: Invalid book title. Please provide a non-empty string.
console.log(library.getBooks()); // Output: ["The Great Gatsby", "To Kill a Mockingbird"]


// another example of clouser for create private variable and if someone to change outside the value of variable then apply if statement for error message
function createCounter() {
    let count = 0; // This variable is a closure

    return {
        increment: function() {
            count += 1; // Increment the closure variable
            return count; // Return the updated value
        },
        decrement: function() {
            if (count > 0) {
                count -= 1; // Decrement the closure variable
                return count; // Return the updated value
            } else {
                console.log("Count cannot be negative.");
            }
        },
        getCount: function() {
            return count; // Return the current value of the closure variable
        }
    };
}
const counter2 = createCounter();
console.log(counter2.increment()); // Output: 1
console.log(counter2.increment()); // Output: 2
console.log(counter2.decrement()); // Output: 1
console.log(counter2.decrement()); // Output: Count cannot be negative.
// Output: 0


let buttonProps = (borderRadius) => { // This is a closure
  const createVariantButtonProps = (variant, color) => { //
      const newProps = {
          borderRadius,
          variant,
          color
      };
      return newProps;
  }
  return createVariantButtonProps;
}

let primaryButton = buttonProps("1rem");

const primaryButtonProps = primaryButton("primary", "red");
console.log(primaryButtonProps); // { borderRadius: '1rem', variant: 'primary', color: 'red' }


  function createCounter2() {
    let count = 0;
    return function(){
      count +=1;
      return count;
    }
  }
  const counter3 = createCounter2();
  console.log(counter3()); // Output: 1
  console.log(counter3()); // Output: 1
  console.log(counter3()); // Output: 1


  function secretKeeper(secretKey){
    return function(){

      return secretKey;
    }
    
  }
  const secret = secretKeeper("mySecretKey");
  console.log(secret());




  function multiplyBy(factor){
    return function(number){
      return number * factor;
    }
  }
  const double = multiplyBy(2);
  console.log(double(2));


  