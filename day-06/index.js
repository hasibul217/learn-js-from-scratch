function sum(a, b) {
  const result = a + b;
  return result;
}

let finalResult = sum(5, 6);
console.log(finalResult);

//nested function

function outer() {
  console.log("Outer function");

  return function inner() {
    console.log("Inner function");
  };
}

// Option 1

//option 2

let finalFuncion = outer();

// console.log(finalFuncion());

finalFuncion();

// Callback funtion

function fool(helloHello) {
  console.log("fool boy");
  helloHello();
}

fool(function () {
  console.log("callback");
});
