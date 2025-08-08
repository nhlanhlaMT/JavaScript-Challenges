// Task 1: Number Guessing Game (Basic Version)

// Generate a secret number between 1 and 10.
// Ask the user to guess the number.
// Keep looping until they guess it right.
// Tell them if they’re wrong and ask again.

// Generate a secret number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

let guess = null;

while (guess !== secretNumber) {
  // Ask the user to guess the number
  guess = Number(prompt("Guess a number between 1 and 10:"));

  if (guess === secretNumber) {
    alert("You guessed it! Nice one.");
  } else {
    alert("Nope, try again!");
  }
}