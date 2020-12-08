var user_1 = prompt("User 1 Enter your name: ");
document.querySelectorAll("p")[0].innerHTML = user_1;

var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "images/dice" + randomNumber + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

var user_2 = prompt("User 2 Enter your name: ");
document.querySelectorAll("p")[1].innerHTML = user_2;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);


if ( randomNumber > randomNumber2) {
    document.querySelector("h1").innerHTML = user_1 + " Wins!";
} else if ( randomNumber2 > randomNumber) {
    document.querySelector("h1").innerHTML = user_2 +  " Wins!";
} else {
    document.querySelector("h1").innerHTML = "It's a tie";
}

