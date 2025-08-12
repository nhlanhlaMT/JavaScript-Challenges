// Task 1: Password Prompt

// Ask the user for a password.
// Keep looping until they enter "admin123".
// The difference here is the prompt will always show at least once, thanks to do...while.

let password;

do {
  password = prompt("Enter password: ");
  
  if (password === null) {
    alert("Cancelled");
    break;
  } 

  if (password !== "123") {
    alert("Invalid Password");
  }


} while(password !== "admin123");

if (password === "admin123") {
  alert("Access Granted");
}

// Task 2: Menu Selection

// Show a menu (1: Pizza, 2: Burger, 3: Exit).
// Ask the user for a choice.
// Keep looping until they choose "3".
// If they choose 1 or 2, print a confirmation message.

let menu;

do {
  let input = prompt("Menu: 1: Pizza, 2: Burger, 3: Exit");

  if (input === null) {
    alert("Cancelled.");
    break;
  }

  menu = Number(input);

  if (menu === 3) {
    alert("Exiting...");
    break;
  }

  if (menu === 1) {
    alert("Ordered a Pizza");
  } else if (menu === 2) {
    alert("Ordered a Burger");
  } else {
    alert("Not on the menu");
  }

} while(true);

// Task 3: Repeat Until Even Number

// Ask the user to enter a number.
// Keep looping until they give you an even number.
// Once even, display "Nice, that's even!".

let number;

do {
  let input = prompt("Enter a number");

   // Mistake in first version:
  // I did not check for NaN (non-numeric inputs like "abc").
  // This caused the loop to run forever because NaN % 2 !== 0 is always falsey logic-wise.
  // Correction:
  // Added isNaN(number) check to give "Invalid Input!" feedback.

  if(input === null) {
    alert("Cancelled");
    break;
  }

  number = Number(input);

  if (isNaN(number)) {
    alert("Invalid Input!");
  } else if (number % 2 !== 0) {
    alert("Not an even number");
  }

} while(isNaN(number) || number % 2 !== 0);


// ❌ Mistake in first version:
// Did not consider that NaN could pass through to final check.
// ✔ Correction:
// Added !isNaN(number) before checking if it's even.

if (!isNaN(number) && number % 2 === 0) {
  alert("Nice, that's even");
}