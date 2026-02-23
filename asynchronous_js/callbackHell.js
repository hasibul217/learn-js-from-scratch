console.log("what the hell is call back hell");

function signFighter(name, callback) {
  setTimeout(() => {
    console.log("✅ Fighter signed:", name);
    callback(name);
  }, 2000);
}

function medicalCheck(name, callback) {
  setTimeout(() => {
    console.log("✅ Medical passed:", name);
    callback(name);
  }, 2000);
}

function weighIn(name, callback) {
  setTimeout(() => {
    console.log("✅ Made weight:", name);
    callback(name);
  }, 2000);
}

function announceFight(name, callback) {
  setTimeout(() => {
    console.log("✅ Fight announced:", name);
    callback(name);
  }, 2000);
}

function fightNight(name, callback) {
  setTimeout(() => {
    console.log("✅ Fight night!", name);
    callback(name);
  }, 2000);
}

// 😈 CALLBACK HELL

signFighter("khabib", (name)=>{
    medicalCheck(name, (name)=>{
        weighIn(name, (name)=>{
            announceFight(name, (name)=>{
                fightNight(name, (name)=>{
                    
                })
            })
        })
    })
})