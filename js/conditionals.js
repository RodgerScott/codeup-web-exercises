"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */


// var confirmed = confirm("Would you like to enter a number?");
//
// if (confirmed) {
//     var prompted = prompt("What is your number?");
//
//     if (isNaN(prompted)) {
//         alert("That is not a number brochacho!");
//     } else {
//
//         if (prompted % 2 === 0) {
//             alert("Your number is even");
//         } else {
//             alert("Your number is odd");
//         }
//
//         alert("Your number plus 100 is " + (parseFloat(prompted) + 100));
//
//         if (prompted > 0) {
//             alert("Your number is positive");
//         } else {
//             alert("Your number is negative");
//         }
//     }
//
// }
//     else {
//     alert("Hey, No worries");
//     }



/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */




// function analyzeColor(input) {
//
//     if (input === 'blue') {
//         return "Blue is the color of the sky";
//     } else if (input === 'red' ){
//         return 'Strawberries are red';
//     } else if (input === 'cyan') {
//         return 'I don\'t know anything about cyan';
//     } else {
//         return "I don\'t know anything about that color";
//     }
// }









// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

// function analyzeColor(input) {
//
//     if (input === 'blue') {
//         return "Blue is the color of the sky";
//     } else if (input === 'red' ){
//         return 'Strawberries are red';
//     } else if (input === 'cyan') {
//         return 'I don\'t know anything about cyan';
//     } else {
//         return "I don\'t know anything about that color";
//     }
// }



/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// function analyzeColor(input) {
//
//     switch(input) {
//         case 'blue':
//             alert("Blue is the color of the sky");
//             break;
//         case 'red':
//             alert("Strawberries are red'");
//             break;
//         case 'cyan':
//             alert("I don\'t know anything about cyan");
//             break;
//         default:
//             alert("I don\'t know anything about that color");
//             break;
//     }
//
// }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */




// function analyzeColor(input) {
//
//     switch(input) {
//         case 'blue':
//             return "Blue is the color of the sky";
//         case 'red':
//             return "Strawberries are red";
//         case 'cyan':
//             return "I don\'t know anything about cyan";
//         default:
//             return "I don\'t know anything about that color";
//     }
//
// }
//
// var response = prompt("What is your favorite color?");
//
// alert(analyzeColor(response));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(a, b) {
//
//     if(a === 0) {
//         return b;
//     } else if (a === 1) {
//         return (.9 * b)
//     } else if (a === 2) {
//         return (.75 * b)
//     } else if (a === 3) {
//         return (.65 * b)
//     } else if (a === 4) {
//         return (.5 * b)
//     } else if (a === 5) {
//         return (0)
//     } else {
//         alert("You did not enter a valid number");
//     }
// }




/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

// var luckyNumber = Math.floor(Math.random() * 6);
//
//
// function calculateTotal(a, b) {
//
//     if(a === 0) {
//         return b;
//     } else if (a === 1) {
//         return (.9 * b);
//     } else if (a === 2) {
//         return (.75 * b);
//     } else if (a === 3) {
//         return (.65 * b);
//     } else if (a === 4) {
//         return (.5 * b);
//     } else if (a === 5) {
//         return (0);
//     } else {
//         alert("You did not enter a valid number");
//     }
// }
//
// var promptTotal = prompt("How much was your bill?");
//
// alert("Your lucky number was " + luckyNumber);
//
// alert("Your price before the bill was " + promptTotal);
//
// alert("Your total bill is " + calculateTotal(luckyNumber, promptTotal));




// Bonus 1
// Write a function (or multiple functions) that will return
// a boolean depending on if the string value passed to it
// as an argument is the name of a day of the week that starts with a T.
// Otherwise, it should return false.



// function dayOfTheWeek(string) {
//     if (string.toLowerCase() === "tuesday" || string.toLowerCase() === "thursday") {
//         return true;
//     }
//     else {
//         return false;
//     }
// }



// Bonus 2.
// Write a function, isValidPassword, that takes in a string argument and returns true or false
// depending on whether or not all the following conditions are true:
// 1) Must be 6 characters long (only for the sake of this exercise, NOT a best practice)
// 2) Contains at least one letter and one number
// 3) Contains at least one upper and one lower case letter
// 4) Only comprised of letters and numbers
// 5) EXTRA BONUS: is not the same forwards and backwards


new RegExp('/[A-Za-z0-9_]/');

function isValidPassword(input) {
    if (input.length < 6) {
        return ("Your password is not long enough");
    }   else  {
            if (RegExp.input !== true);
            return ("Your password sucks");
    }
}