let maxNum = findMax(-12332, -124223);

function findMax(num1, num2) {
  let max = 0;
  if (num1 > num2) {
    max = num1;
  } else {
    max = num2;
  }

  return max;
}

console.log("Maximum number is " + maxNum);