console.log("This is for object");

let user = {
  name: "Tom",
  age: 70,
  "is adimin": true,
};

console.log(user.name);
console.log(user["age"]);
console.log(user["is adimin"]);
user.isStudent = false; //adding property
delete user["is adimin"];
console.log(user);

// let car = prompt("Which is your fav car?")
// let favCars = {
//     [car] : 5
// }

// console.log(favCars);

//contructor function

function Enemy(name, health, attack) {
  this.name = name;
  this.health = health;
  this.attack = attack;
}

let enemy1 = new Enemy("Momo", 100, 80);
let enemy2 = new Enemy("Mishu", 120, 60);
let enemy3 = new Enemy("Anika", 110, 60);

console.log(enemy3);

// normal object creation
const lwChamp = new Object();
lwChamp.name = "Islam Makachev";
lwChamp.age = 34;
lwChamp.weight = 155;
console.log("The former LeightWeight champ is:", lwChamp);

//factory function

function createFighter(name, weight, wins, losses) {
  return {
    name,
    weight,
    wins,
    losses,
    record() {
      return `"${this.name} has a record of ${this.wins}-${this.losses}"`;
    },
    fight() {
      return `${this.name} is ready to fight at ${this.weight} lbs!`;
    },
    winRate() {
      let winningRate = ((this.wins / (this.wins + this.losses)) * 100).toFixed(
        2
      );
      return `The win rate of ${this.name} is ${winningRate}%`;
    },
    isUndefeated() {
      return this.losses === 0;
    },
  };
}

const fighter1 = createFighter("Khabib Nurmagomedov", 155, 29, 0);
const fighter2 = createFighter("Islam Makhachev", 170, 26, 1);
const fighter3 = createFighter("Conor McGregor", 155, 22, 6);

// console.log(fighter1);
// console.log(fighter2.record());
// console.log(fighter3.record());
// console.log(fighter1.record());

console.log(fighter2.fight());
console.log(fighter2.winRate());
if (fighter1.isUndefeated()) {
  console.log("The fighter is a legend!");
}

// fighter1.isUndefeated() ? console.log("Undefeated") : console.log("Defeated");

//Static methods of object 

const dummyObj1 = {p:1, x:2, y:7};
const dummyObj2 = {a:3, b:3};

const freshObj = Object.assign(dummyObj1,dummyObj2);

console.log (freshObj)

//object entries

const myObject = {
  position : "Support",
  room : 115
}

const myArray = Object.entries(myObject);
console.log(myArray);