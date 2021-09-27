// Chessboard

// Write a program that creates a string that represents an 8×8 grid, using newline
// characters to separate lines. At each position of the grid there is either a space
// or a "#" character. The characters should form a chessboard.
// Passing this string to console.log should show something like this:
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size
// = 8 and change the program so that it works for any size, outputting a grid
// of the given width and height.



boardDimensions = Number(prompt("Please enter the dimensions of the squared grid representing the chess board: "));
let chessTable = "";
for (let i = 0; i < boardDimensions;i++) {
  for (let j = 0; j < boardDimensions; j++)
  {
    if ((i+j)%2) chessTable+="#";
    else chessTable+=" ";
  }
  chessTable+="\n";
}

console.log(chessTable);