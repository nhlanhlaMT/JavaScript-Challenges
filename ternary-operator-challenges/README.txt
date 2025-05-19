This Is Where I keep track of my mistakes and how I fixed them.

        Challenge 3: User Login Status

    function userLogged(isLoggedIn) {
      return isLoggedIn === true ? "Welcome back!" : "Please log in.";
    }

    console.log(userLogged(isLoggedIn)); 
    console.log(userLogged(isLoggedIn));

    MISTAKE: The issue with your code is that you're calling console.log(userLogged(isLoggedIn)) without defining isLoggedIn first — so you're passing in an undefined variable, which leads to an error.
_______________________________________________________________________________________________________________________________________________________
       
        Challenge 4: Assign Grade Letter
 NOT A MISTAKE, BUT  Optional Enhancement (for robustness):
       You might add basic input validation to prevent someone from passing a non-number:

  function grade(score) {
  return typeof score !== "number"
    ? "Invalid input"
    : score >= 50
    ? "Pass"
    : "Fail";
}

console.log(grade("fifty")); // Invalid input

_______________________________________________________________________________________________________________________________________________________

     Challenge 7: Check Username & Password Validity
    
function validity(isUsernameValid, isPasswordValid) {
  return isUsernameValid && isPasswordValid === true ? "Access Granted" : "Access Denied"; = [This doesn't check if both values are true the way you expect. It only strictly checks isPasswordValid === true, and then combines it with isUsernameValid — not what you intended.]
}

console.log(validity(true, true));
console.log(validity(true, false));
console.log(validity(false, true));
console.log(validity(false, false));
_______________________________________________________________________________________________________________________________________________________

     // Challenge 8: FizzBuzz (Ternary Style)
     function fizzBuzz(num) {
  return (num % 3 === 0 && num % 5 === 0)
    ? "FizzBuzz"
    : num % 3 === 0 ? "Fizz"
    : num % 5 === 0 && num % num === 0 ? "Buzz"
    : "Not a FizzBuzz";
}

console.log(fizzBuzz(15));
console.log(fizzBuzz(9));
console.log(fizzBuzz(10));
console.log(fizzBuzz(11));

MISTAKES/❌ Issues:
num % 5 === 0 && num % num === 0 — the num % num === 0 part is unnecessary.

Every number modulo itself is 0 (except 0), so this is redundant.

You're trying to check just for divisibility by 5.

"Not a FizzBuzz" — according to classic FizzBuzz, you should return the number itself (not a message) if it's not divisible by 3 or 5.

     // Challenge 9: Price Tier Selector
  
  Here's how you can add case-insensitive matching to the getPriceByUserType function, so that "VIP", `"in"vip", "Vip", etc. all work the same:

function getPriceByUserType(type) {
  const userType = type.toLowerCase(); // normalize to lowercase

  return userType === "student" ? "$10"
       : userType === "regular" ? "$20"
       : userType === "vip"     ? "$30"
       : "Invalid User Type";
}

console.log(getPriceByUserType("student")); // $10
console.log(getPriceByUserType("Regular")); // $20
console.log(getPriceByUserType("VIP"));     // $30
console.log(getPriceByUserType("guest"));   // Invalid User Type

    // Challenge 10: Theme Toggle (Dark/Light Mode)
    
function colorMode(isDarkMode) {
  return isDarkMode === true ? "dark-theme"
      : "light-theme"; 
}

console.log(colorMode(true));
console.log(colorMode(false));

ISSUE: Since isDarkMode is already a boolean, there's no no to explicitly check === true.

    // Challenge 12: Shipping Cost Logic

  function memberCartValueCheck(isMember, cartValue) {
    return isMember, cartValue > 500 ? "Free Shipping"
      : "R50 Shipping Fee";
}

console.log(memberCartValueCheck(true, 501));

MISTAKE: [return isMember, cartValue > 500] = That line uses a comma operator, which doesn’t do what you’re expecting. It evaluates both expressions but only returns the second one, so isMember is ignored.