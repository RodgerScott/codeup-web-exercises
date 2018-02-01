// BONUS 1:
// Create a phone number parser that will convert a string of numbers into a human readable format. The output should
// depend on the number of digits (account for 7, 10, 11 digit numbers):

// Examples:
// input = 5552324343, output = 555-232-4343
// input = 5553434, output = 555-3434
// input = 18005552323, output = 1-800-555-2323

// - DONE

// Extra Challenge: account for invalid characters - DONE
// Extra Challenge: if the input is already formatted, output the unformatted version
// Extra Challenge: allow the parser to accept letters and convert them to the correct numbers


function phoneNumberParser(string_of_numbers) {


    var arrayOfNumbers = string_of_numbers.split("");

    for (var i = 0; i < arrayOfNumbers.length; i++) {
        if (isNaN(parseFloat(arrayOfNumbers[i]))) {
            return "Please remove invalid character and try again"
        }
    }
    if (arrayOfNumbers.length == 7) {
        arrayOfNumbers.splice(3,0, '-');
    } else if (arrayOfNumbers.length == 11) {
        arrayOfNumbers.splice(1, 0, '-');
        arrayOfNumbers.splice(5, 0, '-');
        arrayOfNumbers.splice(9, 0, '-');
    } else {
        return "The wrong number of numbers";
    }

    return arrayOfNumbers.join('');

}


// BONUS 2:
// Create a student roster management app. Using the user dialogue functions (alert, confirm, prompt), create an
// application that will prompt the user to choose from a menu with the following actions:
// 1) Add a student name
// 2) Delete a student name
// 3) View all student names in alphabetical order
// 4) View all student names in reverse alphabetical order
// Store the student names in an array. Account for invalid user input.


alert("Welcome to the bare-bones student roster application");

var studentEntries = prompt("Please enter a student's name?");

if (studentEntries) {
    studentEntries.push(prompt);
} else {
    alert("The names you entered in are " + studentEntries.join(','));
}