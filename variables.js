// variables are building blocks of programming language

var fileName = "app1";
console.log("Hello i am  from " + fileName);

// varaibles in javaScript variables are building blocks of programming language
//named storage location whose value can be manipulated during program execution

//in computer memory variables are stored in memory location

// when you declare a variable with var keyword it will be added to the window object
var randomVaribale = "randomVarobale";
console.log(window.randomVaribale);

// what is window object
// window object is the global object in client side javaScript
// it represent the browser window
// it is the root object of the browser's JavaScript object model

// when you declare a variable with let keyword it will not be added to the window object
//REASON:::::: let is block scoped and var is function scoped
let letVariable = "letVariable";
console.log(window.letVariable);  // undefined


// when you declare a variable with const keyword it will not be added to the window object
//REASON:::::: const is block scoped and var is function scoped
const constVariable = "constVariable";
console.log(window.constVariable);  // undefined


// javaScript have no block scope but when you create variable with let and const it will be block scoped

function show(){
    
    if(true){
        var functionScoped = "functionScoped";
    }
    console.log(functionScoped); // functionScoped
}

show();


// javaScript 3 way create variable

// 1 No keywords
name = "noKeyword";  // it will be added to the window object

// 2 var
var name = "varKeyword";  // scope Global or function

// 3 let/const
// let name = "letKeyword";  // scope block 
// const name = "constKeyword";  // scope block
/* */


function show(){    
    randomVaribale2 = "randomVarobalekoko";
    console.log(window.randomVaribale2);
}
// show();



//====================================================benfits of local scope
let globalVar = "I'm a global variable!";  

function firstFunction() {  
    let localVar = "I'm a local variable in firstFunction!";  
    console.log(globalVar); // Accessing the global variable  
    console.log(localVar); // Accessible here  
}  

function secondFunction() {  
    let localVar = "I'm a local variable in secondFunction!";  
    console.log(globalVar); // Accessing the global variable  
    console.log(localVar); // Accessible here  
}  

firstFunction(); // Output: I'm a global variable! I'm a local variable in firstFunction!  
secondFunction(); // Output: I'm a global variable! I'm a local variable in secondFunction!  

// Explanation: Each function has its own localVar, which means they cannot interfere with each other. This isolation prevents accidental overwrites or conflicts.