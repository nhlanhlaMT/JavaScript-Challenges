// Task 1: Find the max of two numbers
// Write a function max(a, b) that returns the bigger of the two numbers.

function max(a, b) {
  return a > b ? a : b;
}

alert(max(2, 5));



// Task 2: Factorial function
// Write a function factorial(n) that returns the factorial of n (e.g., factorial(5) → 120).

//  RESEARCHED THIS ONE AS I AM NOT THAT MUCH OF A MATH PERSON, TURNS OUT I DID QUITE WELL! 
function factorial(n) {
  if (n < 0) {
    return `Undefined.`;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

alert(factorial(5));

// Task 3: Palindrome check
// Write a function isPalindrome(word) that checks if a word reads the same forwards and backwards.
// Example: isPalindrome("racecar") → true.

// Truly, had no IDEA of how I can solve this one, so I utterly requested assistance from AI. Gave some useful insights.

function isPalindrome(word) {
  let len = word.length;
  for (let i = 0; i < len / 2; i++) {
    if (word[i] !== word[len - 1 - i]) {
      return false; // mismatch found
    }
  }
  return true; // all pairs matched
}

alert(isPalindrome("racecar")); // true
alert(isPalindrome("hello"));   // false