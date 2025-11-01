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