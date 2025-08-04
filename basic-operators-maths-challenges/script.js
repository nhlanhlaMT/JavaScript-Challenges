// Task 1: Tip Calculator
// Ask the user for a restaurant bill total. Then calculate a 15% tip and alert the total amount with tip.

let bill = prompt("Enter bill amount", '');
let amount = Number(bill);

if (isNaN(amount)) {
  alert("Invalid input!");
} else {
  let tip = amount * 0.15;
  let total = amount + tip;
  alert(`You should pay ${total} in total (tip included)`);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Task 2: Remainder Game
// Ask the user for two numbers, then alert:
// "The remainder when X is divided by Y is Z"

let input1 = prompt("Input number:", '');
let input2 = prompt("Input number:", '');

// ❌ Wrong: I used Number(input1, input2) — doesn't accept 2 args
// ✅ Fixed: used Number() separately on both inputs
let num1 = Number(input1);
let num2 = Number(input2);

// ❌ Wrong: I used (isNaN(number) — checks one value and ignores the other
// ✅ Fixed: used if (isNaN(num1) || isNaN(num2)) to check both values
if (isNaN(num1) || isNaN(num2)) { 
  alert("Invalid input");
} else {
  let remainder = num1 % num2;
  alert(`The remainder when ${num1} is divided by ${num2} is ${remainder}`);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Task 3: Power Play
// Ask the user for a base number and a power, and then show the result using the ** operator.

let base = prompt("Enter base number", '');
let power = prompt("Enter power number", '');

let baseNo = Number(base);
let powerNo = Number(power);

if (isNaN(baseNo) || isNaN(powerNo)) {
  alert('Invalid input');
} else {
  let result = baseNo ** powerNo;
  alert(`${baseNo} raised to the power of ${powerNo} is ${result}`);
}
