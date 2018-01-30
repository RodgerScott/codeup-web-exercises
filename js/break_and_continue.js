var value = prompt("Give me an odd number between 1 and 50!");


    while(value % 2 === 0 || value < 1 || value > 50) {
        value = prompt("Enter an odd number, yo!");

        if(value % 2 === 1 && value >= 1 && value <= 5){
            break;
        }
    }

console.log("Your number is " + value);

for(var i = 1; i <= 49; i += 2) {
    if(i == value) {
        console.log("Yikes, skipping number: " + value);
        continue;
    }
    if(i % 2 != 0){
        console.log("Here is an odd number: " + i);
    }

    }





// if(value !== i) {
//     continue;
// }







// else {
//     console.log("The number to skip is " + value);
//     for (var i = 1; i < 50; i += 2) {
//         if(i === value) {
//             console.log("Yikes, skipping over " + value + "!");
//         } else {
//             console.log(i);
//         }
//     }
//     }


