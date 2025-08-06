// Level 5+ Challenge: Access Control system

// Build a mini security check system that works like this:

// Flow:
// Ask for the user’s age.
// Ask if they have a membership card using confirm().
// Ask if they came with an invitation code using prompt().

// Conditions (use &&, ||, ! where needed):
// If age is under 18, deny access no matter what.
// If age is 18 or over, check:
// If they have a membership card → grant access.
// If they don’t have a card, but they have a valid invitation code (e.g. 'VIP42') → grant access.
// Anything else → deny access.

// Output Messages:
// "Access granted" ✅
// "Access denied: too young" ❌
// "Access denied: no membership or valid invite" ❌
// "Invalid input" ❌ (if age is not a number)

let age = Number(prompt("Enter age: ", ''));

//  First attempt, the code had a messy flaw, even after inputting valid age, or inserted an age under 18, it proceeded asking for membership card & code.
//  Problem fixed.
if (isNaN(age)) {
  alert("Invalid Input!");
} else if (age < 18) {
  alert("ACCESS DENIED! TOO YOUNG!");
} else {
  let membershipCard = confirm('Do you possess a membership card?');
  let code = prompt("Invitation code (if you have one): ", '');

  if (membershipCard === true || code === "0xENTER777") {
    alert("ACCESS GRANTED");
  } else {
    alert('ACCESS DENIED! NO MEMBERSHIP/VALID CODE!');
  }
}



