//let randomNumber1 = (Math.floor(Math.random() * 6) + 1);
let playerOne = document.querySelector(".img1");
let playerTwo = document.querySelector(".img2");
let header = document.querySelector("h1");
let n1 = generateRandom();
let n2 = generateRandom();
changeDice (playerOne, n1);
changeDice (playerTwo, n2);
//header.textContent = "Player 1 Wins!"
pickTheWinner(n1, n2, header);
function changeDice (player,randomNumber1){
  var randomImage = "images/dice" + randomNumber1 + ".png";

  player.setAttribute("src",randomImage);
  
  
}
function generateRandom(){
  return (Math.floor(Math.random() * 6) + 1);
}
function pickTheWinner(n1, n2, header){
  if(n1 > n2){
    return header.textContent = "Player 1 Wins!"
  }else if(n1 < n2){
    return header.textContent = "Player 2 Wins!"
  }else{
    return header.textContent = "Draw!"
  }
}


