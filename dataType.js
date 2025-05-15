// datatype in javascript

//defination of datatype
// A datatype is a classification of data which tells the compiler or interpreter how the programmer intends to use the data.

// two types of datatype

//Primitive datatype
//Non-Primitive datatype


//Primitive datatype
// string
// number
// boolean
//null
// undefined
//bigint
//symbol


//undefined is deafult value
let name;
console.log(name); // undefined


//null is a value that represents the intentional absence of any object value
let name1 = null;
console.log(name1); // null


//symbol is used for creating unique identifiers for object properties 
//symbol is a primitive data type
//symbol is immutable and unique

//Real world example of symbol
const sym1 = Symbol('apple');
const sym2 = Symbol('apple');
console.log(sym1 === sym2); // false


//non-primitive datatype
//object

let countryName = "pakistaaanan";
console.log(countryName.lastIndexOf("a")); // 5 


// Goodbye

//dynamic key in object
let key = "Designation";
let obj = {
    name: "John",
    age : 30,
    [key]: "Developer"
}

console.log(obj);

//object working on reference basis primitive working on value basis
let object = {
    name: "John",
    age : 30,
}

let object1 = object;
object1.age = 40;
console.log(object1);
console.log(object);

//primitive working on value basis

// non primitive working on reference basis

//different between declaration and initialization
//declaration means you are telling the compiler that you are going to use a variable
//initialization means you are assigning a value to a variable

//declaration

let name2;  //Jab hum variable ko sirf declare karte hain, to iska koi value assign nahi hota.
// log(name2); // ✅ JavaScript automatically undefined assign karti hai.

//initialization
name2 = "John";

//when both are combine declaration and initialization is called variable initialization


//different between null and undefined
//null is a value that represents the intentional absence of any object value
//undefined is deafult value

let age;
console.log(age); // undefined
age = 30;
console.log(age); // 30

let studentName = null;
console.log(studentName); // null
studentName = "John";
console.log(studentName); // John


const randomArray = ["apple", "banana", "orange", "mango", "grape"];

const chooseRandomFruit = randomArray[Math.floor(Math.random() * randomArray.length)];
console.log(chooseRandomFruit); // Random fruit from the array




let argument1 = 10;
let argument2 = 20;

function addNumbers(a, b) { // parameters are used to pass values to the function
    return a + b;
}

let result = addNumbers(argument1, argument2);  // argument1 and argument2 are passed as arguments to the function addNumbers
console.log(result);
