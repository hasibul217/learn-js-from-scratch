console.log("Object Destructureing");

const ufc = {
  name: "UFC 294",
  location: "Abu Dhabi",
  date: "2023-10-21",
  mainEvent: {
    fighter1: {
      name: "Islam Makhachev",
      country: "Russia",
      age: 32,
      weight: 155,
      record: {
        wins: 25,
        losses: 1,
        draws: 0,
      },
      titles: ["Lightweight Champion"],
      lastFights: ["Charles Oliveira", "Alexander Volkanovski", "Bobby Green"],
    },
    fighter2: {
      name: "Alexander Volkanovski",
      country: "Australia",
      age: 35,
      weight: 155,
      record: {
        wins: 26,
        losses: 3,
        draws: 0,
      },
      titles: ["Former Featherweight Champion"],
      lastFights: ["Yair Rodriguez", "Islam Makhachev", "Max Holloway"],
    },
    result: "Makhachev wins by KO",
    round: 1,
    time: "3:06",
  },
  coMainEvent: {
    fighter1: {
      name: "Khamzat Chimaev",
      country: "Sweden",
      age: 29,
      weight: 185,
      record: {
        wins: 13,
        losses: 0,
        draws: 0,
      },
    },
    fighter2: {
      name: "Paulo Costa",
      country: "Brazil",
      age: 32,
      weight: 185,
      record: {
        wins: 14,
        losses: 3,
        draws: 0,
      },
    },
  },
  attendance: 18123,
  totalFights: 12,
};

//challange 1

const allKeys = Object.keys(ufc);
console.log(allKeys);

for (let key in ufc) {
  console.log(key);
}

//challange 2

const mainEventValues = Object.values(ufc.mainEvent);
console.log(mainEventValues);

//challange 3

const recordObj = Object.entries(ufc.coMainEvent.fighter1.record);
// const fighterName = ufc.mainEvent.fighter1.name;
const {coMainEvent:{fighter1:{name:fighterName}}} = ufc;

console.log(recordObj);
// for (let [key, value] of recordObj) {
//   console.log(`${fighterName} has ${value} ${key}`);
// }

for (let entry of recordObj ){
    // console.log(entry);
    // console.log(entry[0]);
    // console.log(entry[1]);
    console.log(`${fighterName} has  ${entry[1]} ${entry[0]}`);
}

//Challenge 7: Destructuring Arrays

