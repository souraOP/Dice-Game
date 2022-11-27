var randomVariable1 = Math.floor(Math.random() * 6) + 1;
var diceSource1 = "images/dice" + randomVariable1 + ".png";
var randomVariable2 = Math.floor(Math.random() * 6) + 1;
var diceSource2 = "images/dice" + randomVariable2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", diceSource1);
document.querySelectorAll("img")[1].setAttribute("src", diceSource2);

if(randomVariable1 > randomVariable2){
  document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!!";
} else if (randomVariable2 > randomVariable1){
  document.querySelector("h1").innerHTML = "Player 2 Wins!! 🏆";
} else {
  document.querySelector("h1").innerHTML = "DRAW!!";
}