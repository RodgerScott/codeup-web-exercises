"use strict";

var ticTacToeBoard = [[0,0,0],[0,0,0],[0,0,0]];

var turn = 0;

$('.box').click(function(event){

    if (turn % 2 === 0 && $(this).text() === "") {
        $(event.target).text('X');
        turn += 1;
        $('#turnIndicator').text("Go Player O");
    } else if (turn % 2 === 1 && $(this).text() === "") {
        $(event.target).text("O");
        turn += 1;
        $('#turnIndicator').text("Go Player X");
    }
});

$('button').click(function(event) {
    event.preventDefault();
    $('.box').text("");
    $('#turnIndicator').text("Player X's Turn");
    turn = 0;
    ticTacToeBoard = [[0,0,0],[0,0,0],[0,0,0]];
});


$('#tr0').click(function(){
    if(turn % 2 === 0 && ticTacToeBoard[0][0] === 0) {

        ticTacToeBoard[0].splice(0, 1, 1);
        console.log(ticTacToeBoard);
    } else if (turn % 2 === 1 && ticTacToeBoard[0][0] === 0) {
        ticTacToeBoard[0].splice(0, 1, 2);
        console.log(ticTacToeBoard);
    }
    isSolved();
});

$('#tr1').click(function(){
    if(turn % 2 === 0 && ticTacToeBoard[0][1] === 0) {

        ticTacToeBoard[0].splice(1, 1, 1);
        console.log(ticTacToeBoard);
    } else if (turn % 2 === 1 && ticTacToeBoard[0][1] === 0){
        ticTacToeBoard[0].splice(1, 1, 2);
        console.log(ticTacToeBoard);
    }
    isSolved();
});
$('#tr2').click(function(){
    if(turn % 2 === 0 && ticTacToeBoard[0][2] === 0) {

        ticTacToeBoard[0].splice(2, 1, 1);
        console.log(ticTacToeBoard);
    } else if (turn % 2 === 1 && ticTacToeBoard[0][2] === 0) {
        ticTacToeBoard[0].splice(2, 1, 2);
        console.log(ticTacToeBoard);
    }
    isSolved();
});

$('#mr0').click(function(){
    if(turn % 2 === 0 && ticTacToeBoard[1][0] === 0) {

        ticTacToeBoard[1].splice(0, 1, 1);
        console.log(ticTacToeBoard);
    } else if (turn % 2 === 1 && ticTacToeBoard[1][0] === 0) {
        ticTacToeBoard[1].splice(0, 1, 2);
        console.log(ticTacToeBoard);
    }
    isSolved();
});

$('#mr1').click(function(){
    if(turn % 2 === 0 && ticTacToeBoard[1][1] === 0) {

        ticTacToeBoard[1].splice(1, 1, 1);
        console.log(ticTacToeBoard);
    } else if (turn % 2 === 1 && ticTacToeBoard[1][1] === 0) {
        ticTacToeBoard[1].splice(1, 1, 2);
        console.log(ticTacToeBoard);
    }
    isSolved();
});
$('#mr2').click(function(){
    if(turn % 2 === 0 && ticTacToeBoard[1][2] === 0) {

        ticTacToeBoard[1].splice(2, 1, 1);
        console.log(ticTacToeBoard);
    } else if (turn % 2 === 1 && ticTacToeBoard[1][2] === 0) {
        ticTacToeBoard[1].splice(2, 1, 2);
        console.log(ticTacToeBoard);
    }
    isSolved();
});

$('#br0').click(function(){
    if(turn % 2 === 0 && ticTacToeBoard[2][0] === 0) {

        ticTacToeBoard[2].splice(0, 1, 1);
        console.log(ticTacToeBoard);
    } else if (turn % 2 === 1 && ticTacToeBoard[2][0] === 0) {
        ticTacToeBoard[2].splice(0, 1, 2);
        console.log(ticTacToeBoard);
    }
    isSolved();
});

$('#br1').click(function(){
    if(turn % 2 === 0 && ticTacToeBoard[2][1] === 0) {

        ticTacToeBoard[2].splice(1, 1, 1);
        console.log(ticTacToeBoard);
    } else if (turn % 2 === 1 && ticTacToeBoard[2][1] === 0){
        ticTacToeBoard[2].splice(1, 1, 2);
        console.log(ticTacToeBoard);
    }
    isSolved();
});
$('#br2').click(function(){
    if(turn % 2 === 0 && ticTacToeBoard[2][2] === 0) {

        ticTacToeBoard[2].splice(2, 1, 1);
        console.log(ticTacToeBoard);
    } else if (turn % 2 === 1 && ticTacToeBoard[2][2] === 0) {
        ticTacToeBoard[2].splice(2, 1, 2);
        console.log(ticTacToeBoard);
    }
    isSolved();
});


function isSolved() {

//horizontal wins;

    if (ticTacToeBoard[0][0] === 1 && ticTacToeBoard[0][1] === 1 && ticTacToeBoard[0][2] === 1) {
        $('#turnIndicator').text('O Wins');
    }
    if (ticTacToeBoard[1][0] === 1 && ticTacToeBoard[1][1] === 1 && ticTacToeBoard[1][2] === 1) {
        $('#turnIndicator').text('O Wins');
    }
    if (ticTacToeBoard[2][0] === 1 && ticTacToeBoard[2][1] === 1 && ticTacToeBoard[2][2] === 1) {
        $('#turnIndicator').text('O Wins');
    }
    if (ticTacToeBoard[0][0] === 2 && ticTacToeBoard[0][1] === 2 && ticTacToeBoard[0][2] === 2) {
        $('#turnIndicator').text('X Wins');
    }
    if (ticTacToeBoard[1][0] === 2 && ticTacToeBoard[1][1] === 2 && ticTacToeBoard[1][2] === 2) {
        $('#turnIndicator').text('X Wins');
    }
    if (ticTacToeBoard[2][0] === 2 && ticTacToeBoard[2][1] === 2 && ticTacToeBoard[2][2] === 2) {
        $('#turnIndicator').text('X Wins');
    }
//vertical wins
    if (ticTacToeBoard[0][0] === 1 && ticTacToeBoard[1][0] === 1 && ticTacToeBoard[2][0] === 1) {
        $('#turnIndicator').text('O Wins');
    }
    if (ticTacToeBoard[0][1] === 1 && ticTacToeBoard[1][1] === 1 && ticTacToeBoard[2][1] === 1) {
        $('#turnIndicator').text('O Wins');
    }
    if (ticTacToeBoard[0][2] === 1 && ticTacToeBoard[1][2] === 1 && ticTacToeBoard[2][2] === 1) {
        $('#turnIndicator').text('O Wins');
    }
    if (ticTacToeBoard[0][0] === 2 && ticTacToeBoard[1][0] === 2 && ticTacToeBoard[2][0] === 2) {
        $('#turnIndicator').text('X Wins');
    }
    if (ticTacToeBoard[0][1] === 2 && ticTacToeBoard[1][1] === 2 && ticTacToeBoard[2][1] === 2) {
        $('#turnIndicator').text('X Wins');
    }
    if (ticTacToeBoard[0][2] === 2 && ticTacToeBoard[1][2] === 2 && ticTacToeBoard[2][2] === 2) {
        $('#turnIndicator').text('X Wins');
    }
//diagonalwins
    if (ticTacToeBoard[0][0] === 1 && ticTacToeBoard[1][1] === 1 && ticTacToeBoard[2][2] === 1) {
        $('#turnIndicator').text('O Wins');
    }
    if (ticTacToeBoard[0][2] === 1 && ticTacToeBoard[1][1] === 1 && ticTacToeBoard[2][0] === 1) {
        $('#turnIndicator').text('O Wins');
    }
    if (ticTacToeBoard[0][0] === 2 && ticTacToeBoard[1][1] === 2 && ticTacToeBoard[2][2] === 2) {
        $('#turnIndicator').text('X Wins');
    }
    if (ticTacToeBoard[0][2] === 2 && ticTacToeBoard[1][1] === 2 && ticTacToeBoard[2][0] === 2) {
        $('#turnIndicator').text('X Wins');
    }
}