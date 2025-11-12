console.log("Hey Brooo !!!!");

const rockPaperScissor = () => {
  console.log("Please choose an option");

  let userChoicePromt = prompt("Rock or Paper or Scissors");
  let userChoice = userChoicePromt.toLocaleLowerCase();

  let computerChoice;
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  //   console.log(randomNumber);

  switch (randomNumber) {
    case 1:
      {
        computerChoice = "rock";
      }
      break;
    case 2:
      {
        computerChoice = "paper";
      }
      break;
    case 3:
      {
        computerChoice = "scissors";
      }
      break;

    default:
      computerChoice = "none";
  }
  console.log("User choice is", userChoice);
  console.log("Computer choice is", computerChoice);

  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You the User WIN, yay!!!!");
  } 
  else if (userChoice === computerChoice) {
    console.log("The Game is a Tie");
  } 
  else if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log("Oh Ho... Computer Wins!!!!");
  }
   else {
    console.log("Please check the input, We didn't understand it.");
  }
};

rockPaperScissor();
