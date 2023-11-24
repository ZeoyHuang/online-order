console.log("msg from scripts.js");

console.log("animal name is: ", animal);

var animal; //declaration
animal = "cat"; //assignment

const animal2 = "dog";

let animal3 = "bird";
animal3 = 3.14159265359; // dynamic typing


// reference types
//Object
const MY_OBJECT = { key: "value", key2: "value2", name: "Amy", age: 18 }; // pass by value
console.log("MY_OBJECT name is: ", MY_OBJECT.name);

MY_OBJECT["name"] = "Bob";
console.log("MY_OBJECT new name is: ", MY_OBJECT.name);

//Array
const MY_ARRAY = [1, 2, 3, 4, 5];
const MY_ARRAY2 = [true, { key: "value" }, () => {}]; // dynamic typing

console.log("1 == '1'", 1 == "1"); //True
console.log("1 == 1", 1 == 1); //
console.log("1 == true", 1 == true); // Number(true) --> 1; Number(false) --> 0 True
console.log("2 == true", 2 == true); //False

// functions
// Method1 - keyword
function introduceYourself(name) {
 // input validation
 // console.log("Hello, my name is " + name); // string concatenation
 console.log(`Hello, my name is ${name}`); // string interpolation, only works with backticks
}

introduceYourself("Amy");

// Method2 - arrow functions
const addTwoNumbers = (num1, num2) => {
 return num1 + num2;
};

console.log("addTwoNumbers(1, 2)", addTwoNumbers(1, 2));

const addTwoNumbers2 = (num1, num2) => num1 + num2; // only works if there is only one line of code
console.log("addTwoNumbers2(1, 2)", addTwoNumbers2(1, 2));


// IIFE
(function () {
 const SECRET = "secret";
 console.log("IIFE");
})();


(() => {
 console.log("IIFE2");
})();


function animaleSound(sound) {
 sound();
}


const dogSound = () => {
 console.log("woof, Wang Wang");
};


const catSound = () => {
 console.log("meow, Miao Miao");
};


const birdSound = () => {
 console.log("tweet, Jiu Jiu");
};


const pigSound = () => {
 console.log("oink, Hu Hu");
};


animaleSound(dogSound);
animaleSound(catSound); // catSound is callback function
