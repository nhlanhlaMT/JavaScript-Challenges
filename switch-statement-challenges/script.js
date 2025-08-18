// Task 1: Rewrite the "switch" into an "if".

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

let browser = prompt("Enter browser");

if (browser === "Edge") {
  alert("You've got the Edge!");
} else if (browser === "Chrome"
  || browser === "Firefox" 
  || browser === "Safari" 
  || browser === "Opera") {
  alert("Okay we support these browsers too.");
} else {
  alert("We hope that this page looks okay");
}

// Task 2: Rewrite "if" into "switch".

// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

let a = +prompt('a?', '');

switch (a) {
  case 0:
    alert( 0 );
    break;

  case 1:
    alert( 1 );
    break;

  case 2:
  case 3:
    alert( "2, 3" )
}

// Task 3: Day of the Week

// Input: a number from 1–7.
// Output: the name of the corresponding day (1 → Monday, 2 → Tuesday, … 7 → Sunday).
// Use switch to decide which day to print.

let number = +prompt("Enter a number from 1 - 7 for a corresponding day of the week:");

switch (number) {
  case 1:
    alert("Monday");
    break;

  case 2:
    alert("Tuesday");
    break;

  case 3:
    alert("Wednesday");
    break;

  case 4:
    alert("Thursday");
    break;

  case 5:
    alert("Friday");
    break;

  case 6:
    alert("Saturday");
    break;

  case 7:
    alert("Sunday");
    break;

  default:
    alert("Non-existent day"); 
}