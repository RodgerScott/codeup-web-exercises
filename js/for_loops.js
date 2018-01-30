//Multiplication tables


function showMultiplicationTable(number) {
    for (var i = 1; i < 11; i++){
        console.log(number + " x " + i + " = " + (number * i));
    }
}


// 10 random numbers even or add

for (var i = 0; i < 10; i++) {
    var randomN = Math.floor(Math.random() * 160) + 20;
    console.log(randomN);

    if (randomN % 2 === 0) {
        console.log("This number is even");
    } else {
        console.log("This number is odd");
    }
}

// Weird number pyramid

// for (var i = 1; i < 2; i++) {
//     console.log(i);
//     for (var i = 2; i < 3; i++) {
//         console.log("" + i + i);
//         for (var i = 3; i < 4; i++) {
//             console.log("" + i + i + i);
//             for (var i = 4; i < 5; i++) {
//                 console.log("" + i + i + i + i);
//                 for (var i = 5; i < 6; i++) {
//                     console.log("" + i + i + i + i + i);
//                     for (var i = 6; i < 7; i++) {
//                         console.log("" + i + i + i + i + i +i);
//                         for (var i = 7; i < 8; i++) {
//                             console.log("" + i + i + i + i + i + i +i);
//                             for (var i = 8; i < 9; i++) {
//                                 console.log("" + i + i + i + i + i + i +i +i);
//                                 for (var i = 9; i < 10; i++) {
//                                     console.log("" + i + i + i + i + i + i +i +i +i);
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }


// Much better alternative to the above "terribad" solution

// for (var i = 1; i < 10; i++) {
//     var output = "";
//     for( var j = 1; j <= i; j++) {
//         output += i;
//     }
//     console.log(output);
// }


for (var i = 1; i <= 9; i++) {
    i = i.toString();
    console.log(i.repeat(i));
}




// decrementing a loop


for (var i = 100; i > 0; i -= 5) {
    console.log(i);
}


// 99 Bottle of beer


for (var i = 99; i >= 0; i--) {
    if(i > 1){
        console.log(i + " bottles of beer on the wall.");
    } else if (i == 1) {
        console.log(i + " bottle of beer on the wall.");
    } else if (i == 0) {
        console.log("All done");
    }
}


// Fizz Bonus


for (var i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
        continue;
    } if(i % 3 == 0) {
        console.log("Fizz");
        continue;
    } if(i % 5 == 0) {
        console.log("Fizz");
        continue;
    }
    console.log(i);
}


// Prime numbers under 1000

for (var i = 1; i < 1000; i++) {
    if(i == 1 || i == 2 || i == 3 || i == 5 || i == 7) {
        console.log(i);
        continue;
    }

    if(i % 2 != 0 && i % 3 != 0 && i % 5 !=0 && i % 7 !=0) {
        console.log(i);
    }
}

// Fibonacci Sequence under 1000


