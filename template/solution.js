const fs = require("fs");
const { updateSolution } = require("../../utils/update-solution");

// Read data from input.txt
const input = fs.readFileSync("input.txt", "utf8");

console.log(input);
updateSolution();
