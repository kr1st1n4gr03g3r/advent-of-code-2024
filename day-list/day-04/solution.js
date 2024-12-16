const fs = require("fs");
const { updateSolution } = require("../../utils/update-solution");

// Read and process input
const input = fs
  .readFileSync("input.txt", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.split(""));

// Debug input
console.log("Input Grid:", input);

const wordSearch = (input, word) => {
  const rows = input.length;
  const cols = input[0].length;
  const wordLength = word.length;

  const directions = [
    [0, 1], // Right
    [0, -1], // Left
    [1, 0], // Down
    [-1, 0], // Up
    [1, 1], // Down-Right
    [-1, -1], // Up-Left
    [1, -1], // Down-Left
    [-1, 1], // Up-Right
  ];

  const isValid = (x, y) => x >= 0 && y >= 0 && x < rows && y < cols;

  const search = (x, y, direction) => {
    for (let i = 0; i < wordLength; i++) {
      const newX = x + direction[0] * i;
      const newY = y + direction[1] * i;

      if (!isValid(newX, newY) || input[newX][newY] !== word[i]) {
        return false;
      }
    }
    return true;
  };

  let count = 0; // Counter for the total number of occurrences

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      for (const direction of directions) {
        if (search(r, c, direction)) {
          count++; // Increment the counter if a match is found
        }
      }
    }
  }
  return count;
};

const word = "XMAS";
const occurrences = wordSearch(input, word);

console.log(`The word '${word}' appears ${occurrences} times.`);
updateSolution(occurrences);
