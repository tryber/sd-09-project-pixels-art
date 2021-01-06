function clearPixel () {
  let board = document.querySelector(".pixel").childNodes;
  for (index = 0; index < board.length; index += 1) {
    board[index].style.backgroundColor = "white";
  }
}