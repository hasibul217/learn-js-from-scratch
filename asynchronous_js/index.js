// console.log("after a long time");

// function displaySum(sum) {
//   console.log(sum);
// }

// function calculateSum(num1, num2, callback) {
//   let sum = num1 + num2;

//   if (callback) callback(sum);
// }

// calculateSum(10, 20, displaySum);

//set timeout

// console.log("Winter is coming");

// setTimeout(() => {
//   console.log("Tata bye bye");
// }, 5000);

// console.log("Winter will be gone after 5 sec");

//callback pattern

const paymentSuccess = true;

const mark = 90;

const enroll = (callback) => {
  console.log("Course enrollment is in progress");

  setTimeout(() => {
    if (paymentSuccess) {
      callback();
    } else {
      console.log("Payment Failed !");
    }
  }, 2000);
};

const progress = (callback) => {
  console.log("course on progress");
  setTimeout(() => {
    if (mark >= 80) {
      callback();
    } else {
      console.log("Pass mark uthe nai");
    }
  }, 3000);
};

const getCertificate = () => {
  console.log("Preparing your certificate");
  setTimeout(() => {
    console.log("congratulation niga !!");
  }, 1000);
};

enroll(function(){
  progress(getCertificate);  
});

