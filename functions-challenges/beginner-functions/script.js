// Task 1: Square a number
// Write a function square(num) that takes a number and returns its square.
// Example: square(4) → 16.

function square(num) {
  return Math.pow(num, 2);
}

alert(square(3));

// Task 2: Check even or odd
// Write a function isEven(num) that returns "Even" if the number is even and "Odd" if it’s odd.

function isEven(num) {
  if(num % 2 === 0) {
    return `${num} is Even`;
  } else {
    return `${num} is Odd`;
  }
}

alert(isEven(4));
alert(isEven(3));
alert(isEven(2));
alert(isEven(1));

// Task 3: Greeting function
// Write a function greet(name) that returns:
// "Hello, <name>!".
// Example: greet("Nhlanhla") → "Hello, Nhlanhla!".

function greet(name) {
  return `Hello, ${name}`;
}

alert(greet("Nhlanhla Mthembu"));
alert(greet("Best Developer"));
