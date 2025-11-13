const outerCounter = () => {
  let count = 0;

  return (innerCounter = () => {
    count++;
    console.log(`The value is ${count}`);
  });
};

const retValue = outerCounter();

retValue();
retValue();



//another one 

const createBankAccount = (initialBalance) => {
  let balance = initialBalance;
  
}