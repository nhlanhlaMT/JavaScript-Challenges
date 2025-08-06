//  Task 1: Voting Eligibility Checker
// Ask the user for their age. If they’re:

// Under 18 → alert "You can't vote."

// 18 to 100 → alert "You can vote!"

// Over 100 → alert "Are you a time traveler?"

// Use if...else if...else.

let age = Number(prompt("How old are you", 18));

if (isNaN(age)) {
  alert("Invalid input!")
} else if (age < 18) {
  alert("You can't vote");
} else if (age <= 100) {
  alert("You can vote");
} else {
  alert('Are you a time traveler?');
}

//  Task 2: Login Simulation
// Ask for username and password.

// If both match (e.g. "admin" and "1234") → alert "Welcome back!"

// If username is correct but password is wrong → alert "Wrong password."

// If both are wrong → alert "Access denied."

// Use nested if or && / ||.

let username = prompt("Enter username", '');
let password = prompt("Enter Password", '');

if (username === "admin" && password === "1234") {
  alert("Welcome back");
} else if (username === "admin" && password !== "1234") {
  alert("Wrong password!");
} else {
  alert("Access Denied");
}

// Task 2: Ask for a number. Use the ternary ? operator to check if it’s even or odd, and alert accordingly.

let input = prompt("Give a number");
let number = Number(input);

let answer = isNaN(number) ? "Invalid input" :
             number % 2 === 0 ? 'even' :
             'odd';

alert(answer);