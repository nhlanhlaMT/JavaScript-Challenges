// Intermediate for loop challenges

// Task 1: Multiplication Table
// Ask the user for a number.
// Print its multiplication table up to 12 (e.g., 5 x 1 = 5, …).

let number = Number(prompt("Enter a number to see its multiplication table:"))

if (isNaN(number)) {
  alert("Invalid input");
} else {
  for (let i = 0; i <= 12; i++) {
    alert(number + " x " + i + " = " + (number * i));
  }
}

// Task 2: Reverse Countdown
// Ask for a starting number.
// Count down to 0 in the console.

let start = Number(prompt("Enter a starting number:"));

if (isNaN(start) || start < 0) {
  alert("Invalid input");
} else {
  for (let i = start; i >= 0; i--) {
    alert(i);
  }
}

alert("Limit Reached!");

// Task 3: FizzBuzz Classic
// Loop from 1 to 50.
// For multiples of 3, print "Fizz".
// For multiples of 5, print "Buzz".
// For multiples of both, print "FizzBuzz".
// Otherwise, print the number.

for (let i = 1; i <= 50; i++) {
  if (i % 15 === 0) {
    alert(`${i} - FizzBuzz`);
  } else if (i % 3 === 0) {
    alert(`${i} - Fizz`);
  } else if (i % 5 === 0) {
    alert(`${i} - Buzz`);
  } else {
    alert(i);
  }
}