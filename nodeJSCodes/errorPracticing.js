console.log("Practicing errosrs");
// This will crash - fix it with try-catch
const fighter = null;

try {
  console.log(fighter.name);
} catch (mistake) {
  console.log("This should still run");
  console.log(mistake.message);
  console.log(mistake.name);

  const allKeys = Object.keys(mistake);
console.log(allKeys);
}
