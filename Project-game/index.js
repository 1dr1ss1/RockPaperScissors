/* Steps to solve this problem:
   -save the users chosen value
   -Make the computer choose with math.random
   -Compare both results
   -display result message
   -update score board
*/

// Computers random generated choice
function thePcSelector() {
  const gameOptions = ["Rock", "Paper", "Scissors"];
  const randomSelectionInNum = Math.floor(Math.random() * gameOptions.length);
  const randomSelectionInStr = gameOptions[randomSelectionInNum];
  return randomSelectionInStr;
}

// Initializing the counts for the scoreboard
let tieCount = 0;
let lossCount = 0;
let winCount = 0;

/////////// FUNCTION IF USER CLICKS ON ROCK ///////////
function gameStartedRock() {
  // capture the users choice
  const usersChoice = document.querySelector("#rock").dataset.value;

  // comparing result with PC
  const pcSelection = thePcSelector();

  // If a TIE
  if (pcSelection === "Rock") {
    //Display result message
    document.querySelector(".result-p").textContent = `It's a TIE!
    the PC chose ${pcSelection}`;

    // Display tie count
    document.querySelector(
      ".ties-score"
    ).textContent = `Tie: ${(tieCount += 1)} - `;
    console.log(usersChoice + " " + pcSelection);

    // If a LOSS
  } else if (pcSelection === "Paper") {
    //Display result message
    document.querySelector(".result-p").textContent = `You LOST!
    the PC chose ${pcSelection}`;

    // Display loss count
    document.querySelector(
      ".losses-score"
    ).textContent = `Losses: ${(lossCount += 1)} `;

    // If a WIN
  } else if (pcSelection === "Scissors") {
    //Display result message
    document.querySelector(".result-p").textContent = `You WON!
    the PC chose ${pcSelection}`;

    // Display Win count
    document.querySelector(
      ".wins-score"
    ).textContent = `Wins: ${(winCount += 1)} `;
  }
}

/////////// FUNCTION IF USER CLICKS ON PAPER ///////////
function gameStartedPaper() {
  // capture the users choice
  const usersChoice = document.querySelector("#paper").dataset.value;

  // comparing result with PC
  const pcSelection = thePcSelector();

  // If a WIN
  if (pcSelection === "Rock") {
    //Display result message
    document.querySelector(".result-p").textContent = `YOU WON!
    the PC chose ${pcSelection}`;

    // Display tie count
    document.querySelector(
      ".wins-score"
    ).textContent = `Wins: ${(winCount += 1)}`;

    // If a TIE
  } else if (pcSelection === "Paper") {
    //Display result message
    document.querySelector(".result-p").textContent = `It's a TIE!
    the PC chose ${pcSelection}`;

    // Display loss count
    document.querySelector(
      ".ties-score"
    ).textContent = `Ties: ${(tieCount += 1)} `;

    // If a LOSS
  } else if (pcSelection === "Scissors") {
    //Display result message
    document.querySelector(".result-p").textContent = `You LOST!
    the PC chose ${pcSelection}`;

    // Display Win count
    document.querySelector(
      ".losses-score"
    ).textContent = `Losses: ${(lossCount += 1)}`;
  }
}

/////////// FUNCTION IF USER CLICKS ON SCISSORS ///////////
function gameStartedScissors() {
  // capture the users choice
  const usersChoice = document.querySelector("#scissors").dataset.value;

  // comparing result with PC
  const pcSelection = thePcSelector();

  // If a LOSS
  if (pcSelection === "Rock") {
    //Display result message
    document.querySelector(".result-p").textContent = `You LOST!
    the PC chose ${pcSelection}`;

    // Display tie count
    document.querySelector(
      ".losses-score"
    ).textContent = `Losses: ${(lossCount += 1)} - `;
    console.log(usersChoice + " " + pcSelection);

    // If a WIN
  } else if (pcSelection === "Paper") {
    //Display result message
    document.querySelector(".result-p").textContent = `You WON!
    the PC chose ${pcSelection}`;

    // Display loss count
    document.querySelector(
      ".wins-score"
    ).textContent = `Wins: ${(winCount += 1)} - `;

    // If a TIE
  } else if (pcSelection === "Scissors") {
    //Display result message
    document.querySelector(".result-p").textContent = `It's a TIE!
    the PC chose ${pcSelection}`;

    // Display Win count
    document.querySelector(
      ".ties-score"
    ).textContent = `Ties: ${(tieCount += 1)} `;
  }
}
