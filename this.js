// // 
// this refers to the object from where the function is called/executed.


// But the value of this changes depending on how and where the function is called!



//rules of this in normal function
// 1. In a normal function, this refers to the global object (window in browsers).
// 2. In a function, this refers to the object that called the function.
// 3. In a function, this refers to the object that is executing the function.
// 4. In a function, this refers to the object that is being constructed by the function.
// 5. In a function, this refers to the object that is being returned by the function.


// rules of this in arrow function
// 1. In an arrow function, this refers to the lexical scope of the function.
// 2. In an arrow function, this does not refer to the global object.
// 3. In an arrow function, this does not refer to the object that called the function.
// 4. In an arrow function, this does not refer to the object that is executing the function.
// 5. In an arrow function, this does not refer to the object that is being constructed by the function.





// Normal function case this keyword value

// is function invoked without new keyword

// call apply bind

// object.show()  jab tum kise function k oper invoke kya  

// window // agar tum nai function ko directly call kya this ke value hugee ya window if on strict mode then undefined

function exam1(){
    console.log(this);
}

new exam1(); // this will refer to the new object created by the constructor function
// this will refer to the object that is being constructed by the function

// create 5 object different users

const user1 = {
    name: "John",
    age: 30,
}

const user2 = {
    name: "william",
    age: 25,
}

const user3 = {
    name: "jasin",
    age: 20,
}

const user4 = {
    name: "jason",
    age: 22,
}

const user5 = {
    name: "jasmine",
    age: 24,
    greet: greet
}


// apply call bind to control this keyword value

function showUserName(){
    console.log(`My Name is ${this.name}`);
}

showUserName.call() // this will refer to the object that is calling the function


// object.show()  jab tum kise function k oper invoke kya 
const bilalData = {
    name: "Bilal",
    age: 25,
    showUserName: function(){
        console.log(`My Name is ${this.name}`);
    }
}
bilalData.showUserName();
