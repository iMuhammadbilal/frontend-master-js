
// Global scope 

// defination of global scope
// The global scope is the outermost scope of a script or module. It is accessible from any part of the script or module.

// Example of global scope
// In a web page, the global scope is the window object. In a Node.js script, the global scope is the global object.


// Example

var globalVar = "I'm a global variable! and declared with var keyword"; 
let letVariable = "I'm a let variable! and declared with let keyword";
const constVariable = "I'm a const variable! and declared with const keyword";



// function accessing global variables
function show() {  
    console.log(globalVar); // Accessing the global variable  
    console.log(letVariable); // Accessing the let variable  
    console.log(constVariable); // Accessing the const variable  
}

show();


console.log("======================== Check Scope =======================");

let descicion = true
if(descicion){
    console.log(globalVar);
    console.log(letVariable);
    console.log(constVariable);
    
}


console.log("======================== Check Scope =======================");

for(let i = 0; i < 1; i++) {  
    console.log(globalVar); // Accessing the global variable  
    console.log(letVariable); // Accessing the let variable  
    console.log(constVariable); // Accessing the const variable  
}




// ============================= LOCAL SCOPE ==============================
console.log("==========================================LOCAL SCOPE==============================");

// A local scope is a scope that is limited to a specific block of code, such as a function or a loop.

function yourName(){
    let yourName = "Muhammad Bilal"; 

    function fatherName(){
        let fatherName = "Shafi Ullah Khan"; 

    } 
    
    function motherName(){
        let motherName = "Fatima BiBi"; 
        console.log(`My name is ${yourName} and my father name is ${fatherName} and my mother name is ${motherName}`);
        
        
    } 
    fatherName();
    motherName();
}

yourName();
//console.log(localVar); // This would cause an error: localVar is not defined

let num = 0;

for(let num = 0; num < 10; num++){
    console.log(num);
    

}