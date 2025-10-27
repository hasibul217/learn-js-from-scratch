console.log("Practice Problem 1");

// function celsiusToFahrenheit(celsius)

let celsiusToFahrenheit = (celsius) => {
  let farenheit = celsius * (9 / 5) + 32;
  return farenheit;
};

let result = celsiusToFahrenheit(5);

console.log("The farenheit temparature is " + result);

//problem 2

console.log("Practice Problem 2");

let findMax = (num1, num2) => {
  return num1 > num2 ? num1 : num2;
};

let maxNum = findMax(-12332, -124223);

console.log("Maximum number is " + maxNum);

//Problem 03

console.log("Practice Problem 3");

let isPalindrome = (str) => {
  let reverseStr = "";
  for (let i = str.lenth; i > 0; i--) {
    let stringChar = str[i];
    reverseStr += stringChar;
  }

  // let strResult =
  //   str == reverseStr ? "Its a palindrome" : "Its not a palindrome";

  // return strResult;

  return reverseStr;
};

let stringResult = isPalindrome("madam");

console.log(stringResult);
