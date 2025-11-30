console.log("Practicing errosrs");
// This will crash - fix it with try-catch
const fighter = null;

try {
  console.log(fighter.name);
} catch (mistake) {
  console.log("This should still run");
  console.log(mistake.message);
  console.log(mistake.name);
  console.log(mistake.stack);  

  const allKeys = Object.keys(mistake);
  console.log(allKeys);
}

// Task 1.3: Multiple operations

const fighters = [
  { name: "Khabib", wins: 29, losses: 0 },
  { name: "Conor", wins: 22 },  // Missing 'losses'
  { name: "Islam", wins: 26, losses: 1 }
];

