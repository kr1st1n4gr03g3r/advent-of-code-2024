const fs = require("fs");
const { updateSolution } = require("../utils/update-solution");

// Read data from input.txt and assign it as a string
const input = fs.readFileSync("input.txt", "utf8").toString();

// * Split the string into an array:
const array = input.split("");

// * Initialize counter
let count = 0;

// * Find the word "TREX" in consecutive elements
// * Stop array.length - 3 to avoid out-of-bounds
for (let i = 0; i < array.length - 3; i++) {
  if (
    array[i] === "T" &&
    array[i + 1] === "R" &&
    array[i + 2] === "E" &&
    array[i + 3] === "X"
  ) {
    count++; // * Increment counter
    console.log(`Found "TREX" at index ${i}`);
  }
}

// ! Step 4: Log the total number of occurrences
console.log(`"TREX" was found ${count} time(s).`);

updateSolution();
