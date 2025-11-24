console.log("Practicing This keyword");

//task 1
const fighter = {
  name: "Khabib",
  sayName() {
    return `The player name is ${this.name}.`;
  },
};

console.log(fighter.sayName());

// Task 1.3: Multiple Objects, Same Method Structure

const fighter1 = {
  name: "Khabib",
  age: 35,
  country: "Russia",
  introduce() {
    return `I am ${this.name}, ${this.age} years old from ${this.country}`;
  },
};

const fighter2 = {
  name: "Conor",
  age: 35,
  country: "Ireland",
  introduce() {
    return `I am ${this.name}, ${this.age} years old from ${this.country}`;
  },
};

console.log(fighter1.introduce());
console.log(fighter2.introduce());

// task level 2 

// Task 2.2
const fighterIslam = {
  name: "Islam",
  wins: 25,
  losses: 1,
  
  recordWin() {
    return (this.wins += 1);
  },
  
  recordLoss() {
    return (this.losses += 1);
  },
  
  getRecord() {
    return `${this.wins} - ${this.losses}`;
  }
};

console.log(fighterIslam.getRecord());  
fighterIslam.recordWin();
console.log(fighterIslam.getRecord());  
fighterIslam.recordWin();
fighterIslam.recordWin();
console.log(fighterIslam.getRecord());  

// Task 3.1: Understanding arrow functions and 'this'

const fighterCharles = {
  name: "Charles Oliveira",
  wins: 34,
  losses: 9,
  
  // Regular function - 'this' works
  showRecordRegular() {
    return `${this.name}: ${this.wins}-${this.losses}`;
  },
  
  // Arrow function - 'this' will NOT work as expected!
  showRecordArrow: () => {
    return `${this.name}: ${this.wins}-${this.losses}`;
  }
};

console.log(fighterCharles.showRecordRegular());  // Works fine
console.log(fighterCharles.showRecordArrow());    // Will show: undefined

// Task 3.2: The 'this' problem in nested functions

const fighterAlexander = {
  name: "Alexander Volkanovski",
  opponents: ["Max Holloway", "Brian Ortega", "Chan Sung Jung"],
  
  showOpponents() {
    console.log(`${this.name} has fought:`);
    
    this.opponents.forEach(function(opponent) {
      // Try to use 'this.name' here
      console.log(`${this.name} vs ${opponent}`);
    });
  }
};

fighterAlexander.showOpponents();