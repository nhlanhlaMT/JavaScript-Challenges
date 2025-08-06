// Tasked by javascript.info: 
// Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”

let login = prompt("Please Login: ", '');

if (login === "Admin") {
  let password = prompt("Enter Password: ", '');
  if (password === "TheMaster") {
    alert("Welcome");
  } else if (password === '' || password === null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (login === '' || login === null) {
  alert("Canceled")
} else {
  alert("Unknown Member!");
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Tasked 1: Discount Eligibility Checker

// Ask the user for:
// Their age
// Whether they're a student (confirm())

// Discount Logic:
// If the user is under 18, or a student, they get a 15% discount
// If they’re 65 or older, they get a 20% discount
// Everyone else → no discount

// Output:
// “You get a 15% discount!”
// “You get a 20% discount!”
// “No discount for you.”

let age = Number(prompt("Enter your age: ", ''));
let isStudent = confirm("Are you a student?");

if (isNaN(age)) {
  alert("Invalid input!")
// Issue fixed: If someone is 65+ and also a student, they currently get 15%, not 20%.
// If you want to prioritize seniors over students, swap the else if
} else if (age >= 65) {
  alert("You get a 20% discount!");
} else if (age < 18 || isStudent === true) {
  alert("You get a 15% discount!");
} else {
  alert("No discount for you.");
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Task 2: Weather + Mood Checker

// Ask the user:
// Is it raining today? (confirm())
// Are you feeling sad? (confirm())

// Logic:
// If it’s raining AND they’re sad → alert("Stay inside and rest.")
// If it’s raining OR they’re sad → alert("Maybe stay in today.")
// If none of them → alert("Go seize the day!")

// Use a combo of &&, ||, and ! where needed.

let rainCheck = confirm("Is it raining today?");
let isSad = confirm("Are you feeling sad?");

if (rainCheck === true && isSad === true) {
  alert("Stay inside and rest.");
} else if (rainCheck === true || isSad === true) {
  alert("Maybe stay in today");
} else {
  alert("Go seize the day.");
}