console.log("**These are the practice**");

console.log("*Practice 01*");

let x = 23;

console.log("Given number :", x);

if (x / 2 == 0) console.log("Even Number");
else console.log("Odd Number");

console.log("*Practice 02*");

let age = 17;

if (age >= 18) console.log("Done driving");
else console.log("Must be 18 years old");

console.log("**Problem 03**");

let monthlySalary = 12300;
let yearlySalary = 12300 * 12;

let yearlyBonus = yearlySalary * 0.2;

let totalYearlyIncome = yearlySalary + yearlyBonus;

console.log("Total money per annum", totalYearlyIncome);

console.log("**Problem 04**");
let colour = "Green";

if (colour == "Green") console.log("Travelers can Go");
else console.log("The passenger must be stop");

console.log("**Problem 05**");

let units = 55;
let unitsPrice = 150;
let dailyUsage = units * 150;
let montlyUsage = dailyUsage * 30;
let yearlyUsage = montlyUsage * 12;
let totalDiscount = yearlyUsage * 0.2;

let yearlyBill = yearlyUsage - totalDiscount;

console.log("Yearly electricity bill:", yearlyBill);

console.log("**Problem 06**");

let year = 2025;

let result = year % 4 == 0 ? "Leap year" : "Regular year";

console.log(result);

console.log("**Problem 07**");

let p = 4;
let q = 7;
let r = 2;

if (p > q && p > r) console.log("p is the greatest");
else if (q > r && q > p) console.log(" q is the greatest");
else console.log("r is the greatest");
