//task 1
console.log("Task 1");
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");
//task 2
//
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);
//It will still print 1

//task 3
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107",
    },
  },
};

// const  {name : personName} = person;
// const {company : {name: companyName}}=person;
// const {company : {location : {city:companyCity, zip:locationZip}}} = person;

const {
  name: personName,
  company: {
    name: companyName,
    location: { city: companyCity, zip: locationZip },
  },
} = person;

console.log(
  `${personName} works in ${companyName}, which is located at ${companyCity},${locationZip}.`
);

//task 4

const fighter = {
  name: "Islam Makhachev",
  age: 32,
  fightScores: [95, 88, 92, 97, 90, 85, 94], // Performance scores from last 7 fights
  calculateAveragePerformance() {
    let sum = 0;
    for (let i = 0; i < this.fightScores.length; i++) {
      sum += this.fightScores[i];
    }
    let averageScore = (sum / this.fightScores.length).toFixed(2);
    return averageScore;
  },
};
const {name : fighterName} = fighter;
const fighrtAvarageScore = fighter.calculateAveragePerformance();

console.log(
  `${fighterName} has the avarage fight score of ${fighrtAvarageScore}`
);
