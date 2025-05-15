// first targer button waiter button call to to waiter

const callWaiter = document.getElementById('callWaiter');

// tager h2 tag msg from waiter
const waiterMsg = document.getElementById('waiterMsg');

// user click on call waiter button show msg from waiter
callWaiter.addEventListener('click', function(){
    waiterMsg.textContent = "Waiter is on the way!";
});


// this button create for coustmer to check tea menu
const checkTeaMenu = document.getElementById('teaMenuList');


//targer h3 tag to show tea menu
const menu1 = document.getElementById('menu1');
const menu2 = document.getElementById('menu2');
const menu3 = document.getElementById('menu3');
const menu4 = document.getElementById('menu4');

// user click on check tea menu button show tea menu
checkTeaMenu.addEventListener('click', function(){
    menu1.textContent = "1. Green Tea";
    menu2.textContent = "2. Black Tea";
    menu3.textContent = "3. Lemon Tea";
    menu4.textContent = "4. Ginger Tea";
});


// when coustmer enter favrt tea to input filed then show msg please sir wait for tea
const favTea = document.getElementById('favTea');
const orderTea = document.getElementById('orderTea');
const WaiterMsgTeaOrder = document.getElementById('TeaOrderMsg');
const TeaNotAvailable = document.getElementById('TeaNotAvailable');

orderTea.addEventListener('click', function(){
    const teaOrder = favTea.value;
    WaiterMsgTeaOrder.textContent = "Please Sir wait for your " + teaOrder + " tea!";
    // alert("Please wait for your " + teaOrder + " tea!");
});


// when coustmer enter favrt tea then press enter key then show msg please sir wait for tea
favTea.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        const teaOrder = favTea.value;
        // alert("Please wait for your " + teaOrder + " tea!"); 
    WaiterMsgTeaOrder.textContent = "Please Sir wait for your " + teaOrder + " tea!";

    }
});


const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');


// const buttonMessage = ["Bilal", "Ali", "Ahmed"];
// button1.addEventListener('click', () => clickButton("Bilal"));
// button2.addEventListener('click', () => clickButton("Ali"));
// button3.addEventListener('click', () => clickButton("Ahmed"));


// creare array and pass to function
const buttonMessage = ["Bilal", "Ali", "Ahmed"];

button1.addEventListener('click', () => clickButton(buttonMessage[0]));
button2.addEventListener('click', () => clickButton(buttonMessage[1]));
button3.addEventListener('click', () => clickButton(buttonMessage[2]));

function clickButton(name){
    alert("Hello " + name + "!");
    console.log(name);
}
//     alert("Hello " + name + "!");


