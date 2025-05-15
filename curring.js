// currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.
// This allows for partial application of functions, enabling more flexible and reusable code.

// real world example of currying

function multiply(a) {
    return function (b) {
        return a * b;
    };
}

const multiplyBy2 = multiply(2);
console.log(multiplyBy2(3)); // Output: 6
console.log(multiplyBy2(4)); // Output: 8
console.log(multiplyBy2(5)); // Output: 10


function userDetails(name, age) {
    return `Name: ${name}, Age: ${age}`;
}

const userDetailsbilal = userDetails("Bilal", 25);
console.log(userDetailsbilal); // Output: Name: John, Age: 25
const userDetailsCurried = (name) => (age) => `Name: ${name}, Age: ${age}`; // arrow function syntax
const userDetailsJohn = userDetailsCurried("John");
console.log(userDetailsJohn(25)); // Output: Name: John, Age: 25



function userData(name){
    return function (age) {
        console.log(`Name: ${name}, Age: ${age}`); // Output: Name: Bilal, Age: 25
        
        return function (fatherName) {
            return function (motherName) {
                return function (address) {
                    return `Name: ${name}, Age: ${age}, Father Name: ${fatherName}, Mother Name: ${motherName}, Address: ${address}`;
                }
            };
        }
}
}

let name = "Bilal"; // Prompting user for name
let age = 25;
let fatherName = "Shafi Ullah Khan";
let motherName = "Fatima BiBi";
let address = "Lahore";

const userDataCurried = userData(name)(age)(fatherName)(motherName)(address); // calling the curried function
console.log(userDataCurried); // Output: Name: Bilal, Age: 25, Father Name: Shafi Ullah Khan, Mother Name: Fatima BiBi, Address: Lahore
console.log(userData(name)(age)(fatherName)(motherName)(address));


// E-commerce website pe tum user ko discount dena chahte ho based on user type (e.g. Premium, Guest, Regular).

// Tum chahte ho ke tumhara function aise ho ke tum pehle user type pass karo aur phir discount percentage pass karo.
// Is tarah tum easily different user types ke liye different discount functions bana sakte ho.
// Ye tumhe code ko reuse karne ki flexibility deta hai aur tumhe alag alag user types ke liye alag functions nahi banana padta.
// Tumhe sirf ek function banana hai jo user type aur discount percentage ko accept karega.
// Ye function tumhe ek naya function return karega jo sirf discount percentage ko accept karega.

console.log("----------------------------Discount Function Example: ----------------------------");
// E-commerce website pe tum user ko discount dena chahte ho based on user type (e.g. Premium, Guest, Regular).

// Real Life Example of Currying E-Commerce Discount Function
function applyDiscount(userType) {
    return function (discountPercentage) {
        return function (price) {
            return function(congrtMsg){
                const discountAmount = (discountPercentage / 100) * price;
                const finalPrice = price - discountAmount;
                // Check if the user is a premium member and apply an additional discount
                return `User Type: ${userType}, Discount: ${discountPercentage}%, Final Price: $${finalPrice}, ${congrtMsg}`;
            }
        };
        
    };
}

let congrtMsg = "Thanks for shopping with us!";
const premiumDiscount = applyDiscount("Premium")(20)(100)(congrtMsg); // Passing user type and discount percentage and price
const guestDiscount = applyDiscount("Guest")(10)(100)(congrtMsg);// Passing user type and discount percentage and price
const regularDiscount = applyDiscount("Regular")(5)(100)(congrtMsg);// Passing user type and discount percentage and price
console.log(premiumDiscount); // Output: User Type: Premium, Discount: 20%, Final Price: $80
console.log(guestDiscount); // Output: User Type: Guest, Discount: 10%, Final Price: $90
console.log(regularDiscount); // Output: User Type: Regular, Discount: 5%, Final Price: $95



// real example with bank account
function applyInterest(interestRate) {
    return function (balance) {
        return function (congrtMsg){
            const interestAmount = (interestRate / 100) * balance;
            const finalBalance = balance + interestAmount;
            return `Interest Rate: ${interestRate}%, Balance: $${finalBalance}, ${congrtMsg}`;
        }
    };
}
const interestRate = 12; // 12% interest rate
const congrtMsgBank = "Thanks for banking with us!";
const interest = applyInterest(interestRate)(50000)(congrtMsgBank); // Output: Interest Rate: 12%, Balance: $56000, Thanks for banking with us!
console.log(interest); // Output: Interest Rate: 12%, Balance: $56000, Thanks for banking with us!