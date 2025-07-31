"use strict";

// Challenge 5: Multiple Conditions with Nesting
/*Input age →
"Child" if < 13,
"Teen" if < 20,
"Adult" otherwise.*/

function personAge(age) {
  return age < 13 ? "Child":
         age < 20 ? "Teen" :
                    "Adult"; 
}

console.log(personAge(12));
console.log(personAge(18));;
console.log(personAge(21));

// Challenge 6: Temperature Check
/*Input temperature →
"Cold" if < 10,
"Warm" if between 10–25,
"Hot" if > 25.*/

function temperatureChecker(temp) {
  return temp < 10 ? "Cold" 
       : temp < 25 ? "Warm" :
                     "Hot";
}

console.log(temperatureChecker(9));
console.log(temperatureChecker(12));
console.log(temperatureChecker(26));

// Challenge 7: Check Username and Password Validity
/*Input two booleans: isUsernameValid, isPasswordValid →
Output "Access Granted" if both are true, else "Access Denied".*/

function validity(isUsernameValid, isPasswordValid) {
  return (isUsernameValid === true && isPasswordValid === true)
    ? "Access Granted" 
    : "Access Denied";
}

console.log(validity(true, true));
console.log(validity(true, false));
console.log(validity(false, true));
console.log(validity(false, false));

// Challenge 8: FizzBuzz (Ternary Style)
/*Given a number, use nested ternary to return:
"FizzBuzz" if divisible by 3 and 5,
"Fizz" if by 3,
"Buzz" if by 5,
or the number itself.*/

function fizzBuzz(num) {
  return (num % 3 === 0 && num % 5 === 0) 
    ? "FizzBuzz"
    : num % 3 === 0
    ? "Fizz"
    : num % 5 === 0
    ? "Buzz"
    : num
}

console.log(fizzBuzz(15));
console.log(fizzBuzz(9));
console.log(fizzBuzz(10));
console.log(fizzBuzz(11));