//Object in javascript
//object is a collection of properties and methods
//object is a collection of key value pair

//how many ways to create object in javascript
//1 object literal
//2 object constructor
//3 object.create
//4 Constructor Function
//5 es6classes


//object literal
const obj = {}

obj.name = "John"
console.log(obj);
console.log(obj.name);


//add key dynamically in object
let keyName = "language";

//obj.keyName = "javascript"; //wrong way to add key because it will add key as keyName

obj[keyName] = "javascript"; //right way to add key
console.log(obj);

// Point to be noted
// when add dynamically key in object then use square bracket notation

let string = "123kl";
console.log(Number(string)); //NaN
console.log(parseInt(string)); //123

let number = 123;
console.log(number.toString()); //"123"

