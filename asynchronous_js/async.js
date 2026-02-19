// ============================================================
//        ASYNCHRONOUS JAVASCRIPT — from scratch
// ============================================================

// ============================================================
// STEP 1: Synchronous vs Asynchronous (The Big Idea)
// ============================================================
// JavaScript runs line by line (synchronously) by default.
// But some tasks take time (e.g. fetching data, reading files).
// We don't want to freeze/block the whole program while waiting.
// That's what ASYNCHRONOUS code solves!

console.log("--- STEP 1: Sync vs Async ---");

console.log("1. Start");

setTimeout(() => {
  console.log("2. This runs after 2 seconds (async!)");
}, 2000);

console.log("3. End");

// OUTPUT ORDER:
// 1. Start
// 3. End
// 2. This runs after 2 seconds (async!)   <-- JS didn't wait!


// ============================================================
// STEP 2: Callbacks
// ============================================================
// A callback is simply a function passed into another function
// to be called later (once an async task is done).

console.log("\n--- STEP 2: Callbacks ---");

function fetchUserData(userId, callback) {
  console.log(`Fetching data for user ${userId}...`);

  // Simulating a network delay with setTimeout
  setTimeout(() => {
    const user = { id: userId, name: "Khabib", age: 35 };
    callback(user); // call the callback with the result
  }, 1500);
}

fetchUserData(1, (user) => {
  console.log("Got user:", user);
});

// ⚠️ CALLBACK HELL — what happens when callbacks nest too deep:
// fetchUserData(1, (user) => {
//   fetchOrders(user.id, (orders) => {
//     fetchOrderDetails(orders[0], (details) => {
//       // getting messy... this is "callback hell" 😵
//     });
//   });
// });


// ============================================================
// STEP 3: Promises
// ============================================================
// A Promise is an object that represents a future value.
// It is in one of 3 states:
//   - pending   → waiting for result
//   - fulfilled → success ✅
//   - rejected  → failure ❌

console.log("\n--- STEP 3: Promises ---");

// Creating a promise
function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    console.log(`Fetching user ${userId}...`);

    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: "Islam Makhachev" }); // success
      } else {
        reject("Invalid user ID!"); // failure
      }
    }, 1000);
  });
}

// Consuming a promise with .then() and .catch()
fetchUser(2)
  .then((user) => {
    console.log("Success! Got user:", user);
    return user.name; // you can chain .then()
  })
  .then((name) => {
    console.log("Fighter name is:", name);
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Done fetching! (runs always)");
  });

// Test the error case:
fetchUser(-1)
  .then((user) => console.log(user))
  .catch((error) => console.log("Caught error:", error));


// ============================================================
// STEP 4: Promise Chaining
// ============================================================
// You can chain .then() calls to run async tasks in sequence

console.log("\n--- STEP 4: Promise Chaining ---");

function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: "Charles" }), 500);
  });
}

function getOrders(user) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ user, orders: ["Order1", "Order2"] }), 500);
  });
}

getUser(1)
  .then((user) => {
    console.log("Step 1 - Got user:", user.name);
    return getOrders(user); // returning another promise
  })
  .then((result) => {
    console.log("Step 2 - Got orders for:", result.user.name, result.orders);
  })
  .catch((err) => console.error("Error:", err));


// ============================================================
// STEP 5: Async / Await  ⭐ (The Modern & Cleanest Way)
// ============================================================
// async/await is just a nicer way to write promise-based code.
// - `async` before a function makes it return a Promise.
// - `await` pauses execution INSIDE the async function until
//    the promise resolves. (doesn't block the whole program)

console.log("\n--- STEP 5: Async / Await ---");

async function loadFighterData(id) {
  console.log("Loading fighter...");

  const fighter = await getUser(id); // wait for promise to resolve
  console.log("Fighter loaded:", fighter.name);

  const data = await getOrders(fighter); // wait again
  console.log("Orders:", data.orders);
}

loadFighterData(3);


// ============================================================
// STEP 6: Error Handling with Async/Await
// ============================================================
// Use try/catch blocks — just like normal JS errors!

console.log("\n--- STEP 6: Error Handling ---");

async function loadUser(id) {
  try {
    const user = await fetchUser(id); // this is the Promise fn from Step 3
    console.log("Loaded:", user.name);
  } catch (error) {
    console.log("Something went wrong:", error);
  } finally {
    console.log("Cleanup done.");
  }
}

loadUser(5);   // valid id → success
loadUser(-5);  // invalid id → caught error


// ============================================================
// STEP 7: Promise.all() — Run Multiple Promises in Parallel
// ============================================================
// Instead of waiting one by one, run all at the same time!

console.log("\n--- STEP 7: Promise.all ---");

async function loadAllFighters() {
  const [fighter1, fighter2, fighter3] = await Promise.all([
    getUser(1),
    getUser(2),
    getUser(3),
  ]);

  console.log("All loaded at once:");
  console.log(fighter1, fighter2, fighter3);
}

loadAllFighters();


// ============================================================
// STEP 8: Fetch API (Real-World Async — Calling an API)
// ============================================================
// fetch() is built into the browser and returns a Promise.
// YOU MUST run this in the browser (not Node.js) or use node-fetch.

console.log("\n--- STEP 8: Fetch API ---");

async function getPost(postId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const post = await response.json(); // parse JSON response
    console.log("Post title:", post.title);
  } catch (error) {
    console.log("Fetch failed:", error.message);
  }
}

getPost(1);
getPost(5);

// ============================================================
// 🎯 SUMMARY
// ============================================================
// 1. JS is single-threaded — async lets it handle waiting tasks
// 2. setTimeout → simplest async example
// 3. Callbacks → first async pattern, can lead to "callback hell"
// 4. Promises → cleaner way, .then() / .catch() / .finally()
// 5. async/await → cleanest syntax, built on top of Promises
// 6. try/catch → handle errors in async/await
// 7. Promise.all() → run multiple promises simultaneously
// 8. fetch() → real-world API calls in the browser
// ============================================================
