// const myPromise = new Promise((resolve, reject) => {
//   const fighterHealthy = false;

//   if (fighterHealthy) {
//     resolve("Khabib is ready!"); // ✅ success
//   } else {
//     reject("Khabib is injured!"); // ❌ failure
//   }
// });

// myPromise
//   .then((message) => console.log("Good news:", message)) // ✅ resolve lands here
//   .catch((message) => console.log("Bad news:", message));

//old example of callback hell

function signFighter(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("✅ Fighter signed:", name);
      resolve(name); // done! passing name forward
    }, 2000);
  });
}

function medicalCheck(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Medical Check done");
      resolve(name);
    }, 4000);
  });
}
// using it
signFighter("Khabib")
  .then((name) => medicalCheck(name)) // pass name into medicalCheck
  .then((name) => console.log("🎉 All done:", name))
  .catch((err) => console.log("❌ Error:", err));

//daily task

const dailyTask = (taskName, duration) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(taskName);
    }, duration);

    resolve();
  });
};


dailyTask("wake up from bed", 3000).then(()=> dailyTask("go to office", 4000))