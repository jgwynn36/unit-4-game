$(document).ready(function () {
    var Random = Math.floor(Math.random() * 101 + 19)

    $('randomNumber').text(Random);

    var num1 = Math.floor(Math.random() * 11 + 1)
    var num2 = Math.floor(Math.random() * 11 + 1)
    var num3 = Math.floor(Math.random() * 11 + 1)
    var num4 = Math.floor(Math.random() * 11 + 1)

    let score = 0;
    let wins = 0;
    let losses = 0;

    $('#winstracker').text(wins);
    $('#losetracker').text(losses);

    function reset() {
        Random = Math.floor(Math.random() * 101 + 19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        score = 0;
        $('#scoreboard').text(score);
    }

    function win() {
        alert("You won!");
        wins++;
        $('#winstracker').text(wins);
        reset();
    }

    function lose() {
        alert("You lose!");
        losses++;
        $('#losetracker').text(losses);
        reset();
    }

    $('#gem1').on('click', function () {
        score = score + num1;
        console.log("New score=" + score);
        $('#score').text(score);
        if (score === Random) {
            win();
        }
        else if (score > Random) {
            lose();
        }
    })

    $('#blueGem').on('click', function () {
        score = score + num1;
        console.log("New score=" + score);
        $('#score').text(score);
        if (score === Random) {
            win();
        }
        else if (score > Random) {
            lose();
        }
    })

    $('#redGem').on('click', function () {
        score = score + num1;
        console.log("New score=" + score);
        $('#score').text(score);
        if (score === Random) {
            win();
        }
        else if (score > Random) {
            lose();
        }
    })

    $('#topaz').on('click', function () {
        score = score + num1;
        console.log("New score=" + score);
        $('#score').text(score);
        if (score === Random) {
            win();
        }
        else if (score > Random) {
            lose();
        }
    });

}); 