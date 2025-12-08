//parsing error (error that need to be fixed)

//runtime error

try {
  console.log(x);
} catch (firstError) {
  console.log("You have to define the variable");
  console.log(`The error type is ${firstError.name}`);
  console.error(`The error messeage is ${firstError.message}`);
  console.log(firstError);
  console.log(firstError.stack);
}

// throw example

const divideNumbers = (a, b) => {
  try {
    if (b === 0) {
      throw new Error("Division by 0 is not allow");
    } else {
      let result = a / b;

      console.log(`The result is ${result}`);
    }
  } catch (divisionError) {
    console.error(divisionError.message);
  }
};

divideNumbers(6, 7);

const validateNumber = (number) => {
  if (isNaN(number)) {
    throw new Error("Input must be a valid number");
  } else {
    console.log(`The number is ${number}`);
  }
};

try {
  validateNumber("das");
} catch (validationError) {
  console.error(validationError.message);
  console.error(validationError.name);
}
//form daata

function validateForm(formData) {
  if (!formData.userName) throw new Error("Please enter your name");
  if (!formData.email) {
    throw new Error("Please enter your email");
  }
  if (!formData.email.includes("@"))
    throw new Error("Please enter a valid email");
  if (formData.password != formData.passwordAgain)
    throw new Error("Password Did not match");

  console.log("Registration Successfull !!");
}

try {
  validateForm({
    userName: "fwefwef",
    email: "shanto@gmail.com",
    password: "1234",
    passwordAgain: "1234",
  });
} catch (validateFormError) {
  console.error(validateFormError.message);
}
