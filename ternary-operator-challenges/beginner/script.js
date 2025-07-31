"use strict";

// Challenge 1: Check if number is positive or negative
// Input a number → Output "Positive" or "Negative or Zero".

function checkSign(num) {
  return num > 0 ? "Positive" : "Negative or Zero";
}

console.log(checkSign(6));
console.log(checkSign(0));
console.log(checkSign(-1));

// Challenge 2: Even or Odd
// Input an integer → Output "Even" or "Odd".

function checkEvenOrOdd(number) {
  return number % 2 === 0 ? `${number} is even` : `${number} is odd`;
}

console.log(checkEvenOrOdd(1));
console.log(checkEvenOrOdd(2));
console.log(checkEvenOrOdd(3));
console.log(checkEvenOrOdd(4));

// Challenge 3: User Login Status
// Input a boolean isLoggedIn → Output "Welcome back!" or "Please log in."

function userLogged(isLoggedIn) {
  return isLoggedIn === true ? "Welcome back!" : "Please log in.";
}

console.log(userLogged(true));
console.log(userLogged(false));

// Challenge 4: Assign Grade Letter
// Input a score (0–100) → Output "Pass" or "Fail" (cutoff at 50).

function grade(score) {
  return score >= 50 ? "Pass" : "Fail";
}

console.log(grade(49));
console.log(grade(50));
console.log(grade(100));