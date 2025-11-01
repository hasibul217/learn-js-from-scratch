console.log("Running nodejs");

//callback function

function nameLess(dummy) {
  console.log("Its a func");
  dummy();
}

nameLess(function () {
  console.log("Confused");
});

//Write a function greet(name, callback), where callback prints a message using the name parameter.

// function greet(name, callback) {
//   console.log("Your name " + name + " ?");
//   callback(name);
// }

// function greetingFunc(name) {
//   console.log("Hey there welcome home", name);
// }

// greet("Shanto", greetingFunc);

//using arrow function
let greet = (name, callback) => {
  console.log("Your name " + name + " ?");
  callback(name);
};

let greetingFunc = (name) => {
  console.log("Hey there welcome home", name);
};

greet("Shanto", greetingFunc);
