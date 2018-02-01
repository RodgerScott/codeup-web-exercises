(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ['Tom', 'Steve', 'Mary', 'Deb'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function(name) {
        console.log('The name is: ' + name + '.');
    });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */


    function first(input) {
        return input[0];
    }

    function second(input) {
        return input[1];
    }

    function last(input) {
        return input[input.length - 1];
    }


    console.log(first([1, 2, 3, 4, 5]));
    console.log(second([1, 2, 3, 4, 5]));
    console.log(last([1, 2, 3, 4, 5]));


})();

// 1. Write a function called average(numbers) that takes in an array of numbers and returns the average

function averageNumbers(array) {
    var average = 0;
    for (var i = 0; i < array.length; i++) {
        average += array[i];
    }
    return average / array.length;
}


// 2. Write a function called sumAll(numbers) that takes
// in an array of numbers and returns the sum of adding all of them.


function sumOfAllNumbers(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

//3. Write a function called max(numbers) that takes in an array of
// numberrs and returns the largest

function maxNumbers(array) {

    return Math.max(...array);
}

//4. Write a function called min(numbers) that takes in an array of numbers and returns the smallest

function minNumbers(array) {

    return Math.min(...array);
}


//5. Write a function called reverseArray(array) that takes in an array and
// returns the elements in reverse order

function reverseArray(array) {
    return array.reverse();
}

//6. Write a function called randomElement(array) that takes in an array and returns a random element

function randomElement(array) {
    return array[Math.floor((Math.random() * array.length -1) +1)];
}

//7. Write a function called upperCaseAll(array) that takes in an
// array of strings and returns an array of uppercased strings.

function upperCaseAll(array) {
    var uppercased = [];
    for (var i = 0; i < array.length; i++) {
        uppercased.push(array[i].toUpperCase());
    }
    return uppercased;
}

//8. Write a function called getOdds(array) that returns
// an array of only the odd numbers from an array of numbers.

function getOdds(array) {
    var returnOdds = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 1) {
            returnOdds.push(array[i]);
        }
    }
    return returnOdds;
}

// 9. Write a function called getEvens(array) that returns only the
// even numbers from an array of numbers

function getEvens(array) {
    var returnOdds = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            returnOdds.push(array[i]);
        }
    }
    return returnOdds;
}

// 10. Write a function called multiplyAll(array)
// that takes in an array of numbers and returns the
// result of multiplying all the numbers

function multiplyAll(array) {
    var result = 1;
    for (var i = 0; i < array.length; i++) {
        result *= array[i];
    }
    return result;
}