// Level 1: Warm-up Challenge
// Task: Ask the user for their name using prompt, then greet them with an alert.

let name = prompt("What is your name?", "");

alert(`Welcome, ${name}`);

// Level 2: Branching Logic Challenge
// Task: Use confirm to ask the user if they want to continue. If they agree, ask for their favorite color using prompt and show an alert with the result. If they decline, alert “Goodbye!”

let proceed = confirm("Do you want to continue?");

if (proceed === true) {
  let favColor = prompt("What's your favorite color?", '');
  alert(`Your favorite color is ${favColor}`);
} else {
  alert("Goodbye!");
}

// 3: Logic + Validation Challenge
// Task: Ask the user for their age using prompt. If they enter a number below 18, alert “You are too young.” If they enter 18 or above, alert “Welcome, adult.” If they enter something invalid (like text or nothing), alert “Invalid input.”

let input = prompt("How old are you?", '');
let age = Number(input); // converts input to a number

if (isNaN(age)) {
  alert("Invalid input!"); // if user typed anything but a number
} else if (age < 18) {
  alert("You are too young");
} else {
  alert("Welcome, adult");
}