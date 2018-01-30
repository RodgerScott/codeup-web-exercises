"use strict";


var i = 1;

while (i < 65536) {
    i *= 2;
    console.log(i);
}



var amountOfConesToSell = Math.floor(Math.random() * 50) + 50;


do {
    console.log("I have " + amountOfConesToSell + " cones to sell");

    var peopleToSellToo = Math.floor(Math.random() * 5) + 1;

    if(peopleToSellToo < amountOfConesToSell) {
        console.log("I just sold this dummy " + peopleToSellToo + " ice cream cones");
        amountOfConesToSell -= peopleToSellToo;
    }
    if(peopleToSellToo > amountOfConesToSell) {
        console.log("I can\'t sell you " + peopleToSellToo + " because I only have " + amountOfConesToSell);
        amountOfConesToSell -= peopleToSellToo;
        break;
    }
    if (peopleToSellToo === amountOfConesToSell) {
        console.log("Yay, I sold all my cones");
        break;
    }
}
while(amountOfConesToSell > peopleToSellToo);