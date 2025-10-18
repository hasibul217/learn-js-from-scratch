console.log("Day 04");

console.log("Problem 1");

// let day = "Monday";

// switch (day) {
//    case "monday":
//        console.log("It's the start of the week.");
//        break;
//    default:
//        console.log("It's a normal day.");
// }

// answer will be normal day

console.log("Problem 2");

let amount = 600;

if (amount % 100 == 0) {
  console.log("Withdrawal succesfull");
} else {
  console.log(" Invalid amount ");
}

console.log("Problem 3");

let operator = "-";

let x = 5;
let y = 4;

switch (operator) {
  case "+":
    console.log(x + y);
    break;

  case "-":
    console.log(x - y);
    break;
  case "*":
    console.log(x * y);
    break;
  case "%":
    console.log(x % y);
    break;

  default:
    console.log("Wrong operator");
}

console.log("problem 4 ");
let age = 60;

if (age < 18) {
  console.log("ticket price is $3");
} else if (age >= 18 && age <= 60) {
  console.log(" ticket price is $10");
} else {
  console.log("Ticket price is $8");
}

console.log("problem 5");

let birthMonth = "December";

switch (birthMonth) {
  case "April":
  case "May":
    console.log("goromer dine jonmo");
    break;

  case "June":
  case "July":
    console.log("Bristir dine jonmo");
    break;

  case "November":
  case "December":
    console.log("Shiter din e jonmo");
    break;

  default:
    console.log("Month not included");
}

console.log("Problem 6");

let sides = "dual";

switch (sides) {
  case "same":
    console.log("Equilateral Triangle");
    break;

  case "dual":
    console.log(" Isosceles Triangle ");
    break;

  case "different":
    console.log("Scalene Triangle");
    break;

  default:
    console.log("Not a triangle");
}
