var random1 = Math.floor(Math.random()*6) + 1; 
var dice1 = document.querySelector(".img1");
var imageSrc1 = "images/dice" + random1 + ".png";
dice1.setAttribute("src", imageSrc1 );

var random2 = Math.floor(Math.random()*6) + 1;
var dice2 = document.querySelector(".img2");
var imageSrc2 = "images/dice" + random2 + ".png";
dice2.setAttribute("src", imageSrc2 );

if (random1>random2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (random1<random2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}


  