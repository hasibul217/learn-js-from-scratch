
const myPromise = new Promise((resolve, reject) => {

  const fighterHealthy = true;

  if (fighterHealthy) {
    resolve("Khabib is ready!"); // ✅ success
  } else {
    reject("Khabib is injured!"); // ❌ failure
  }

});

myPromise
  .then((message) => console.log("Good news:", message))  // ✅ resolve lands here
  .catch((message) => console.log("Bad news:", message));