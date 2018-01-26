function sayHello(name) {
    return "Hi " + name;
}


function capitalizeString(string) {

    var firstPart = string.substring(0, 1).toUpperCase();
    var secondPart = string.substring(1, string.length -1).toLowerCase();

    return firstPart + secondPart;
}

function upperCase(string) {

    return string.toUpperCase();
}


function identity(input) {
    return input;
}


function isOdd(number) {
    return number % 2 == 1;
}

function isEven(number) {
    return number % 2 == 0;
}

function isPositive(number) {
    return number > 0 == true;
}

function isNegative(number) {
    return number < 0 == true;
}

//REVISIT THIS ONE

function isBoolean(input) {
    return input === false || true;
}

function isTrue(boolean) {
    return boolean === true;
}

function isFalse(boolean) {
    return boolean === false;
}

function isTruthy(input) {
    return input == true;
}

function isFalsy(input) {
    return input == false;
}

function isVowel(letter) {
    return letter.toLowerCase() === 'a' || letter.toLowerCase() === 'e' ||
        letter.toLowerCase() === 'i' || letter.toLowerCase() === 'o' ||
        letter.toLowerCase() === 'u';
}

function hasVowels(input) {
    var testCase = input.toLowerCase();
    for (var i = 0; i < testCase.length; i++){
        if (isVowel(testCase[i].toString())){
            return true;
        }
    }
    return false;
}

function isConsanant(letter) {
    return letter.toLowerCase() !== 'a' && letter.toLowerCase() !== 'e' &&
        letter.toLowerCase() !== 'i' && letter.toLowerCase() !== 'o' &&
        letter.toLowerCase() !== 'u';
}


function hasConsanants(input) {
    var testCase = input.toLowerCase();
    for (var i = 0; i < testCase.length; i++) {
        if (isConsanant(testCase[i].toString())) {
            return true;
        }
    }
    return false;
}


function isCapital(letter) {
    return letter != letter.toLowerCase();
}

function hasCapitalLetters(string) {
    return string != string.toLowerCase();
}

function isLowerCase(letter) {
    return letter != letter.toUpperCase();
}

function hasLowerCase(string) {
    return string != string.toUpperCase();
}

