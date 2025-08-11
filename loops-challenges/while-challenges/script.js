// Task 1: Number Guessing Game (Basic Version)

// Generate a secret number between 1 and 10.
// Ask the user to guess the number.
// Keep looping until they guess it right.
// Tell them if they’re wrong and ask again.

// Added my Extra feature: Game Exit and Enter Valid Number for a NaN input

// const secretNumber = Math.floor(Math.random() * 10) + 1;
// let guess = null;

// while (guess !== secretNumber) {
//   let input = prompt("Guess a number from 1 -10 (or type 'exit' to quit): ");

//   if (input === null || input.toLowerCase() === 'exit') {
//     alert("Game exited");
//     break;
//   }

//   guess = Number(input) 

//   if (isNaN(guess)) {
//     alert("Please Enter a Valid Number");
//     continue;
//   }

//   if (guess === secretNumber) {
//     alert(`Your guess: ${guess} - Secret No: ${secretNumber} - Correct!✅`)
//   } else {
//     alert(`Your guess: ${guess} - Secret No: ${secretNumber} - Incorrect!✖`);
//   }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Task 2: Countdown Timer

// Ask the user for a starting number.
// Count down to 0 using while.
// Display each number as it counts down.
// At 0, display "Time's up!".

// let count = Number(prompt("Enter a string number: "));

// while (count > 0) {
//   alert(count);
//   count--;
// }
// alert("Time's Up!")

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Task 3: Sum of Positive Numbers

// Keep asking the user to enter numbers.
// Stop when they enter a negative number.
// Show the sum of all the positive numbers they entered.

let sum =0
let number;

while (true) {
  number = Number(prompt("Enter a number"));

  if (isNaN(number)) {
    alert("Please enter a valid number!")
    continue;
  }

  if (number < 0) {
    break;
  }

  sum += number
}

alert(`The sum of positive numbers is: ${sum}`);

