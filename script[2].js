var square = document.querySelectorAll(".square")
var turn = "Coalition"
var par = document.getElementById("messageParagraph")
var game = true
var winningConditions = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]]

for (var i = 0; i < square.length; i++) {
  square[i].addEventListener("click", makeLogo)
}

function makeLogo() {
  var image
  var gameInTie = true;
  if (game == true) {
    if (this.style.backgroundImage == "") {
      if (turn == "Coalition") {
        image = 'cod1.png'
        turn = "Allegiance"
      }
      else  {
        image = 'cod2.png'
        turn = "Coalition"
      }

      this.style.backgroundImage = `url(${image})`
      if (checkWinner()) {
        console.log("winner found")
        par.innerHTML = `${turn} Wins`
      }
      else {
        for (var i = 0; i < square.length; i++) {
          if (square[i].style.backgroundImage == "") {
            gameInTie = false
          }
        }

        if (gameInTie){
          par.innerHTML = "Elephant's game"
        }
      }
    }
  }
}
function checkWinner() {
  var winnerFound = false
  var checkLocation

  for (var i = 0; i < winningConditions.length; i++) {
    checkLocation = winningConditions[i]

    if (square[checkLocation[0]].style.backgroundImage != "" && square[checkLocation[1]].style.backgroundImage != "" && square[checkLocation[2]].style.backgroundImage != "") {
      if (square[checkLocation[0]].style.backgroundImage == square[checkLocation[1]].style.backgroundImage && square[checkLocation[0]].style.backgroundImage == square[checkLocation[2]].style.backgroundImage) {
        winnerFound = true
        game = false
      }
    }
  }


  return winnerFound
}