"use strict";

var ticTacToeBoard = [[0,0,0],[0,0,0],[0,0,0]];

var turn = 0;

var active = false;
var draw = false;

$('button').click(function(event) {
    event.preventDefault();
    active = true;
    $('#turnIndicator').removeClass('hidden');
    $('.box').text("");
    $('#turnIndicator').text("Go Player X");
    turn = 0;
    ticTacToeBoard = [[0,0,0],[0,0,0],[0,0,0]];
});

    $('.box').click(function (event) {

        if (turn % 2 === 0 && $(this).text() === "" && active === true) {
            $(event.target).text('X');
            turn += 1;
            $('#turnIndicator').text("Go Player O");
        } else if (turn % 2 === 1 && $(this).text() === "" && active === true) {
            $(event.target).text("O");
            turn += 1;
            $('#turnIndicator').text("Go Player X");
        }
    });


    $('#tr0').click(function () {
        if (turn % 2 === 0 && ticTacToeBoard[0][0] === 0 && active === true) {

            ticTacToeBoard[0].splice(0, 1, 1);
            console.log(ticTacToeBoard);
        } else if (turn % 2 === 1 && ticTacToeBoard[0][0] === 0 && active === true) {
            ticTacToeBoard[0].splice(0, 1, 2);
            console.log(ticTacToeBoard);
        }
        isSolved();
    });

    $('#tr1').click(function () {
        if (turn % 2 === 0 && ticTacToeBoard[0][1] === 0 && active === true) {

            ticTacToeBoard[0].splice(1, 1, 1);
            console.log(ticTacToeBoard);
        } else if (turn % 2 === 1 && ticTacToeBoard[0][1] === 0 && active === true) {
            ticTacToeBoard[0].splice(1, 1, 2);
            console.log(ticTacToeBoard);
        }
        isSolved();
    });
    $('#tr2').click(function () {
        if (turn % 2 === 0 && ticTacToeBoard[0][2] === 0 && active === true) {

            ticTacToeBoard[0].splice(2, 1, 1);
            console.log(ticTacToeBoard);
        } else if (turn % 2 === 1 && ticTacToeBoard[0][2] === 0 && active === true) {
            ticTacToeBoard[0].splice(2, 1, 2);
            console.log(ticTacToeBoard);
        }
        isSolved();
    });

    $('#mr0').click(function () {
        if (turn % 2 === 0 && ticTacToeBoard[1][0] === 0 && active === true) {

            ticTacToeBoard[1].splice(0, 1, 1);
            console.log(ticTacToeBoard);
        } else if (turn % 2 === 1 && ticTacToeBoard[1][0] === 0 && active === true) {
            ticTacToeBoard[1].splice(0, 1, 2);
            console.log(ticTacToeBoard);
        }
        isSolved();
    });

    $('#mr1').click(function () {
        if (turn % 2 === 0 && ticTacToeBoard[1][1] === 0 && active === true) {

            ticTacToeBoard[1].splice(1, 1, 1);
            console.log(ticTacToeBoard);
        } else if (turn % 2 === 1 && ticTacToeBoard[1][1] === 0 && active === true) {
            ticTacToeBoard[1].splice(1, 1, 2);
            console.log(ticTacToeBoard);
        }
        isSolved();
    });

    $('#mr2').click(function () {
        if (turn % 2 === 0 && ticTacToeBoard[1][2] === 0 && active === true) {

            ticTacToeBoard[1].splice(2, 1, 1);
            console.log(ticTacToeBoard);
        } else if (turn % 2 === 1 && ticTacToeBoard[1][2] === 0 && active === true) {
            ticTacToeBoard[1].splice(2, 1, 2);
            console.log(ticTacToeBoard);
        }
        isSolved();
    });

    $('#br0').click(function () {
        if (turn % 2 === 0 && ticTacToeBoard[2][0] === 0 && active === true) {

            ticTacToeBoard[2].splice(0, 1, 1);
            console.log(ticTacToeBoard);
        } else if (turn % 2 === 1 && ticTacToeBoard[2][0] === 0 && active === true) {
            ticTacToeBoard[2].splice(0, 1, 2);
            console.log(ticTacToeBoard);
        }
        isSolved();
    });

    $('#br1').click(function () {
        if (turn % 2 === 0 && ticTacToeBoard[2][1] === 0 && active === true) {

            ticTacToeBoard[2].splice(1, 1, 1);
            console.log(ticTacToeBoard);
        } else if (turn % 2 === 1 && ticTacToeBoard[2][1] === 0 && active === true) {
            ticTacToeBoard[2].splice(1, 1, 2);
            console.log(ticTacToeBoard);
        }
        isSolved();
    });

    $('#br2').click(function () {
        if (turn % 2 === 0 && ticTacToeBoard[2][2] === 0 && active === true) {

            ticTacToeBoard[2].splice(2, 1, 1);
            console.log(ticTacToeBoard);
        } else if (turn % 2 === 1 && ticTacToeBoard[2][2] === 0 && active === true) {
            ticTacToeBoard[2].splice(2, 1, 2);
            console.log(ticTacToeBoard);
        }
        isSolved();
    });


function isSolved() {

//horizontal wins;

    if (ticTacToeBoard[0][0] === 1 && ticTacToeBoard[0][1] === 1 && ticTacToeBoard[0][2] === 1) {
        $('#turnIndicator').text('O Wins');
        active = false;
    }
    if (ticTacToeBoard[1][0] === 1 && ticTacToeBoard[1][1] === 1 && ticTacToeBoard[1][2] === 1) {
        $('#turnIndicator').text('O Wins');
        active = false;
    }
    if (ticTacToeBoard[2][0] === 1 && ticTacToeBoard[2][1] === 1 && ticTacToeBoard[2][2] === 1) {
        $('#turnIndicator').text('O Wins');
        active = false;
    }
    if (ticTacToeBoard[0][0] === 2 && ticTacToeBoard[0][1] === 2 && ticTacToeBoard[0][2] === 2) {
        $('#turnIndicator').text('X Wins');
        active = false;
    }
    if (ticTacToeBoard[1][0] === 2 && ticTacToeBoard[1][1] === 2 && ticTacToeBoard[1][2] === 2) {
        $('#turnIndicator').text('X Wins');
        active = false;
    }
    if (ticTacToeBoard[2][0] === 2 && ticTacToeBoard[2][1] === 2 && ticTacToeBoard[2][2] === 2) {
        $('#turnIndicator').text('X Wins');
        active = false;
    }
//vertical wins
    if (ticTacToeBoard[0][0] === 1 && ticTacToeBoard[1][0] === 1 && ticTacToeBoard[2][0] === 1) {
        $('#turnIndicator').text('O Wins');
        active = false;
    }
    if (ticTacToeBoard[0][1] === 1 && ticTacToeBoard[1][1] === 1 && ticTacToeBoard[2][1] === 1) {
        $('#turnIndicator').text('O Wins');
        active = false;
    }
    if (ticTacToeBoard[0][2] === 1 && ticTacToeBoard[1][2] === 1 && ticTacToeBoard[2][2] === 1) {
        $('#turnIndicator').text('O Wins');
        active = false;
    }
    if (ticTacToeBoard[0][0] === 2 && ticTacToeBoard[1][0] === 2 && ticTacToeBoard[2][0] === 2) {
        $('#turnIndicator').text('X Wins');
        active = false;
    }
    if (ticTacToeBoard[0][1] === 2 && ticTacToeBoard[1][1] === 2 && ticTacToeBoard[2][1] === 2) {
        $('#turnIndicator').text('X Wins');
        active = false;
    }
    if (ticTacToeBoard[0][2] === 2 && ticTacToeBoard[1][2] === 2 && ticTacToeBoard[2][2] === 2) {
        $('#turnIndicator').text('X Wins');
        active = false;
    }
//diagonalwins
    if (ticTacToeBoard[0][0] === 1 && ticTacToeBoard[1][1] === 1 && ticTacToeBoard[2][2] === 1) {
        $('#turnIndicator').text('O Wins');
        active = false;
    }
    if (ticTacToeBoard[0][2] === 1 && ticTacToeBoard[1][1] === 1 && ticTacToeBoard[2][0] === 1) {
        $('#turnIndicator').text('O Wins');
        active = false;
    }
    if (ticTacToeBoard[0][0] === 2 && ticTacToeBoard[1][1] === 2 && ticTacToeBoard[2][2] === 2) {
        $('#turnIndicator').text('X Wins');
        active = false;
    }
    if (ticTacToeBoard[0][2] === 2 && ticTacToeBoard[1][1] === 2 && ticTacToeBoard[2][0] === 2) {
        $('#turnIndicator').text('X Wins');
        active = false;
    }

    //draw
    var count = 0;

    for (var i = 0; i < ticTacToeBoard.length; i++) {
        for (var j = 0; j < 3; j++) {
            if (ticTacToeBoard[i][j] === 1|| ticTacToeBoard[i][j] === 2) {
                count += 1;
            }
        }
    }
    if (count === 9) {
        $('#turnIndicator').text('It\'s a draw!');
        draw === true;
    } else {
        count = 0;
    }

}