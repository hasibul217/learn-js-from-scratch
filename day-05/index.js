console.log("Day 05");

console.log("Problem 01");

for (let i = 1; i <= 5; i++) {
  let str = " ";
  for (let j = 1; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}

console.log("Problem 02");

let N = 3;

for (let i = 1; i <= 10; i++) {
  let result = N * i;

  console.log(N + "x" + i + "=" + result);
  //   console.log(`${N} x ${i} = ${result}`);
}

console.log("Problem 03");
let sum = 0;
for (let i = 1; i <= 500; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}
console.log(sum);

console.log("Problem 04")


