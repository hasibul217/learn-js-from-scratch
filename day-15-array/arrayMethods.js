// map
// filter
// find
// reduce
// some
// every
// includes
// sort

const ufcFighters = [
  {
    name: "Jon Jones",
    weight: 248,
    division: "Heavyweight",
    wins: 27,
    losses: 1,
    country: "USA",
    age: 36,
  },
  {
    name: "Islam Makhachev",
    weight: 155,
    division: "Lightweight",
    wins: 25,
    losses: 1,
    country: "Russia",
    age: 32,
  },
  {
    name: "Alex Pereira",
    weight: 205,
    division: "Light Heavyweight",
    wins: 11,
    losses: 2,
    country: "Brazil",
    age: 36,
  },
  {
    name: "Leon Edwards",
    weight: 170,
    division: "Welterweight",
    wins: 22,
    losses: 3,
    country: "England",
    age: 32,
  },
  {
    name: "Sean O'Malley",
    weight: 135,
    division: "Bantamweight",
    wins: 18,
    losses: 1,
    country: "USA",
    age: 29,
  },
  {
    name: "Alexander Volkanovski",
    weight: 145,
    division: "Featherweight",
    wins: 26,
    losses: 3,
    country: "Australia",
    age: 35,
  },
  {
    name: "Ilia Topuria",
    weight: 145,
    division: "Featherweight",
    wins: 15,
    losses: 0,
    country: "Georgia",
    age: 27,
  },
  {
    name: "Dricus Du Plessis",
    weight: 185,
    division: "Middleweight",
    wins: 22,
    losses: 2,
    country: "South Africa",
    age: 30,
  },
  {
    name: "Merab Dvalishvili",
    weight: 135,
    division: "Bantamweight",
    wins: 18,
    losses: 4,
    country: "Georgia",
    age: 33,
  },
  {
    name: "Charles Oliveira",
    weight: 155,
    division: "Lightweight",
    wins: 34,
    losses: 10,
    country: "Brazil",
    age: 35,
  },
];

//task-1

const ufcFightersName = ufcFighters.map(function (fighter) {
  return fighter.name;
});

console.log(`Here are the names of all fighters ${ufcFightersName}.`);

//task-2

const fightersUSA = ufcFighters.filter(function (fighter) {
  return fighter.country === "USA";
});

// console.log(`These warriors are from USA ${fightersUSA.name}.`);

console.log(fightersUSA);

//task-3

const specificFighter = ufcFighters.find(function (fighter) {
  return fighter.name === "Alex Pereira";
});

console.log(specificFighter);

//task-4

const fighterChecker = ufcFightersName.includes("Conor McGreagor");
console.log(fighterChecker);

//task-5

const undefeatedFighterChecker = ufcFighters.some(
  (fighters) => fighters.losses
);
console.log(undefeatedFighterChecker);

//task-6
console.log("Task 6:");

const fightersWinCheck = ufcFighters.every((fighters) => fighters.wins > 10);
console.log(fightersWinCheck);

//task-7 (intermediate level)
console.log("Task 7:");

const copyUfcFighters = [...ufcFighters];

const sortedArray = copyUfcFighters.sort((a, b) => b.wins - a.wins);

console.log(sortedArray);

//task-8
console.log("Task 8:");
// const totalNumberOfWins = ufcFighters.reduce(getTotalWins,0);

// console.log(`Total number of wins of these fighter ${totalNumberOfWins}`);

// function getTotalWins (previous, next){
//   return previous + next. wins;
// }

const totalNumberOfWins = ufcFighters.reduce(
  (previous, next) => previous + next.wins,
  0
);

console.log(totalNumberOfWins);

//task-9
console.log("Task - 9 :");

const youngFighter = ufcFighters
  .filter((underThirty) => underThirty.age < 30)
  .map((fighter) => fighter.name);

console.log(`These fighters are under 30 years old ${youngFighter.join(", ")}.`);

//task 10
console.log("Task - 10 :");
const lightWeightFighters = ufcFighters.filter(
  (fighter) => fighter.division === "Lightweight"
);

const sortedLwFighterArray = [...lightWeightFighters].sort(
  (a, b) => b.wins - a.wins
);

console.log(sortedLwFighterArray);


//task-11
console.log("Task - 11 :");

const fighterByDivision = ufcFighters.reduce((acc, fighter) => {
  const division = fighter.division;

  if(!acc[division]){
    acc[division] = [];
  }

  acc[division].push(fighter);

  return acc;
}, {})

console.log(fighterByDivision); // will do later




f (){
  return 
}

