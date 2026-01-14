// ============================================
// LEVEL 1: Array Basics
// ============================================

// Task 1.1: Creating Arrays
const lightWeight = ["Ilia", "Arman", "Paddy", "Chanko"];
const welterWeight = new Array("Islam", "Carlos", "Shavkat", "Jack");
const middleWeight = [];

console.log("=== Task 1.1: Creating Arrays ===");
console.log("Lightweight:", lightWeight);
console.log("Welterweight:", welterWeight);
console.log("Middleweight:", middleWeight);

// Task 1.2: Accessing Array Elements
const champions = ["Khabib", "Islam", "Alexander", "Leon", "Jon"];

console.log("\n=== Task 1.2: Accessing Elements ===");
console.log(`First champion is ${champions[0]}`);
console.log(`Third champion is ${champions[2]}`);
console.log(`Last champion is ${champions[4]}`);
console.log(`Total number of champions is ${champions.length}`);

// Task 1.3: Array Length
const roster = ["Khabib", "Islam", "Conor", "Dustin", "Charles"];

console.log("\n=== Task 1.3: Array Length ===");
console.log(`The length of the roster is ${roster.length}`);
console.log(`The last element is ${roster[roster.length - 1]}`);
console.log(`Total number of fighters in the roster is ${roster.length}`);

// ============================================
// LEVEL 2: Modifying Arrays
// ============================================

// Task 2.1: Changing Array Elements
const fighters = ["Khabib", "Islam", "Conor"];
fighters[2] = "Dustin";

console.log("\n=== Task 2.1: Changing Elements ===");
console.log("Updated fighters:", fighters);

champions[0] = "Islam Makhachev";
champions[champions.length - 1] = "Jon Jones";
console.log("Updated champions:", champions);

// Task 2.2: Adding Elements
console.log("\n=== Task 2.2: Adding Elements ===");
fighters.push("Chama");
console.log("After push:", fighters);

fighters.unshift("Ankalev");
console.log("After unshift:", fighters);

// Task 2.3: Removing Elements
console.log("\n=== Task 2.3: Removing Elements ===");
fighters.pop();
fighters.shift();
console.log("After pop and shift:", fighters);

const lineup = ["Khabib", "Islam", "Charles", "Dustin", "Conor"];
console.log("Initial lineup:", lineup);

const lastFighter = lineup.pop();
console.log(`Removed last fighter: ${lastFighter}`);

const firstFighter = lineup.shift();
console.log(`Removed first fighter: ${firstFighter}`);

console.log("Final lineup:", lineup);

// ============================================
// LEVEL 3: Array Methods - Searching & Checking
// ============================================

// Task 3.1: indexOf() and includes()
const rankingList = ["Khabib", "Islam", "Charles", "Dustin", "Conor"];

console.log("=== Task 3.1: Finding Elements ===");

console.log(rankingList.indexOf("Islam"));

console.log(rankingList.indexOf("Conor"));

console.log(rankingList.indexOf("Jon"));

// Task 3.2: find() and findIndex()
const ufcFighters = [
  { name: "Khabib", wins: 29, losses: 0 },
  { name: "Islam", wins: 26, losses: 1 },
  { name: "Conor", wins: 22, losses: 6 },
  { name: "Dustin", wins: 30, losses: 9 },
];

console.log("\n=== Task 3.2: Finding with Conditions ===");

// 1. Find the first fighter with more than 28 wins

const topWinFighter = ufcFighters.find(function (fighter) {
  return fighter.wins > 28;
});

// 2. Find the index of the first undefeated fighter (losses === 0)

const undefeatedFighter = ufcFighters.findIndex(
  (fighter) => fighter.losses === 0
);

// 3. Find a fighter named "Islam"

const fanFavourite = ufcFighters.find(function (fighter) {
  return fighter.name === "Islam";
});
// 4. Log all results

console.log(
  `Most win ${topWinFighter.name}, Undefeated fighter at ${undefeatedFighter}, Most fan favourite ${fanFavourite.name}.`
);

// Task 3.3: every() and some()
const athleteList = [
  { name: "Khabib", age: 35, active: false },
  { name: "Islam", age: 32, active: true },
  { name: "Charles", age: 34, active: true },
  { name: "Dustin", age: 35, active: true },
];

console.log("\n=== Task 3.3: Checking All Elements ===");

// 1. Check if ALL fighters are over 30 years old using .every()
const allOver30 = athleteList.every(function (athlete) {
  return athlete.age > 30;
});

// 2. Check if SOME fighters are inactive using .some()
const someInactive = athleteList.some(function (athlete) {
  return athlete.active === false;
});

// 3. Check if ALL fighters are active
const allActive = athleteList.every(function (athlete) {
  return athlete.active === true;
});

// 4. Log results with descriptive messages
console.log(`All fighters over 30: ${allOver30}`);
console.log(`Some fighters inactive: ${someInactive}`);
console.log(`All fighters active: ${allActive}`);

// Big Task

const ufcRoster = [
  {
    id: 1,
    name: "Khabib Nurmagomedov",
    division: "Lightweight",
    wins: 29,
    losses: 0,
    age: 35,
    active: false,
  },
  {
    id: 2,
    name: "Islam Makhachev",
    division: "Lightweight",
    wins: 26,
    losses: 1,
    age: 32,
    active: true,
  },
  {
    id: 3,
    name: "Alexander Volkanovski",
    division: "Featherweight",
    wins: 26,
    losses: 3,
    age: 35,
    active: true,
  },
  {
    id: 4,
    name: "Conor McGregor",
    division: "Lightweight",
    wins: 22,
    losses: 6,
    age: 36,
    active: true,
  },
  {
    id: 5,
    name: "Charles Oliveira",
    division: "Lightweight",
    wins: 34,
    losses: 10,
    age: 34,
    active: true,
  },
  {
    id: 6,
    name: "Dustin Poirier",
    division: "Lightweight",
    wins: 30,
    losses: 9,
    age: 35,
    active: true,
  },
  {
    id: 7,
    name: "Max Holloway",
    division: "Featherweight",
    wins: 26,
    losses: 7,
    age: 32,
    active: true,
  },
  {
    id: 8,
    name: "Leon Edwards",
    division: "Welterweight",
    wins: 22,
    losses: 3,
    age: 32,
    active: true,
  },
];

console.log("=== UFC ROSTER MANAGEMENT SYSTEM ===\n");

// Task A: Basic Operations
console.log("--- Task A: Basic Operations ---");

// 1. Add Jon Jones
ufcRoster.push({
  id: 9,
  name: "Jon Jones",
  division: "Heavyweight",
  wins: 28,
  losses: 1,
  age: 37,
  active: true,
});

console.log(ufcRoster);

// 2. Remove last fighter

ufcRoster.pop();

// 3. Log total fighters

console.log(`Total number of fighter : ${ufcRoster.length}`);

// 4. Change Conor's status

ufcRoster[3].active = false;

console.log(ufcRoster[3].active);

// Task B: Searching & Finding
console.log("\n--- Task B: Searching & Finding ---");

// 5. Find Khabib

const rosterPosition = ufcRoster.findIndex(
  (roster) => roster.name === "Khabib Nurmagomedov"
);

console.log(`Khabib position is at ${rosterPosition}`);

// 6. Find index of fighter with id: 5

const rosterIndex = ufcRoster.findIndex((roster) => roster.id === 5);

console.log(`The index of fighter with id 5 ${rosterIndex} `);

// 7. Check if any retired fighters

const retiredFighter = ufcRoster.find((retired) => retired.active === false);

console.log(`${retiredFighter.name} has retired from the UFC.`);

// 8. Check if all have more than 20 wins

const rosterWinCheck = ufcRoster.every((roster) => roster.wins > 20);

console.log(
  `The statement that all have more than 20 wins is ${rosterWinCheck}.`
);

// 9. Find first undefeated fighter

const undefeatedRoster = ufcRoster.find((roster) => roster.losses === 0);

console.log(`First undefeated fighter is ${undefeatedRoster.name}`);

// Task C: Division Analysis
console.log("\n--- Task C: Division Analysis ---");

// 10. Count Lightweight fighters

const lightWeightFighters = ufcRoster.filter(
  (lwf) => lwf.division === "Lightweight"
);

console.log(`Total lightweight fighter is ${lightWeightFighters.length}.`);

// 11. Get all Featherweight fighter names

const featherWeightFighters = ufcRoster.filter(
  (fwf) => fwf.division === "Featherweight"
);

const featherWeightFightersName = featherWeightFighters.map(
  (fighter) => fighter.name
);

console.log(`All featherweight fighers name are ${featherWeightFightersName}`);

// 12. Find fighter with most wins

let mostWinsInUFC = ufcRoster[0];

for (let i = 0; i < ufcRoster.length; i++) {
  let currentWins = ufcRoster[i];

  if (currentWins.wins > mostWinsInUFC.wins) {
    mostWinsInUFC = currentWins;
  }
}

console.log(`Fighter with the most wins ${mostWinsInUFC.name}`);

//using reduce method 

let mostWinRoster = ufcRoster.reduce(getMostWins);

console.log(`Fighter with the most wins ${mostWinRoster.name}`)

function getMostWins(prev, next){
  if (prev.wins > next.wins) {
    return prev.wins;
  }
}


// Task D: Validation & Checks
console.log("\n--- Task D: Validation & Checks ---");

// 13. Check if Jon Jones exists

// 14. Check if any fighter over 36

// 15. Verify no fighter has more than 35 wins
