// Level 1 — Basic Understanding

// 1️⃣ Print Twice
// Write a function sayTwice(name, callback) that:

// Prints "First hello, <name>".

// Then calls the callback which prints "Second hello, <name>".

let sayTwice = (name, callback) => {
    console.log ("First Hello "+name)
    callback(name);
}

let greetingFunc = (name)=>{
 console.log("Second Hello " +name )
}

sayTwice("MomoMota", greetingFunc);

// 2️⃣ Math Message
// Write a function calculate(num1, num2, callback) that:

// Calculates the sum of the two numbers.

// Then calls the callback with the result.

let calculate = (num1, num2, callbackSum) => {
    let sum = num1 + num2 ;
    console.log("Sum is: " + sum);
    callbackSum(sum);
}

let printSum = (sum)=> {
    let doubleSum = sum * 2;
    console.log ("Double of sum: " + doubleSum);
}

calculate(5,5,printSum);