const dailyTask = (taskName, duration) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(taskName); // ✅ prints first
      resolve();             // ✅ THEN resolves
    }, duration);
  });
};

async function taskManager() {
  await dailyTask("wake up", 1000);
  await dailyTask("brush teeth", 1000);
  await dailyTask("shower", 1000);
  await dailyTask("go to office", 1000);
}

taskManager();
