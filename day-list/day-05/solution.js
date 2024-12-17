const fs = require("fs");
const { updateSolution } = require("../../utils/update-solution");

// Read data from input.txt & convert into string and split into new lines
const input = fs.readFileSync("input.txt", "utf8").toString().split("\n");

// * Initialize the arrays:
const pageOrdering = []; // * Lines with a pipe "|"
const updatedPageNumbers = []; // * Lines without a pipe "|"

for (let line of input) {
  line = line.trim(); // Remove extra spaces/newlines

  if (line.includes("|")) {
    pageOrdering.push(line); // Add to pageOrdering
  } else if (line.length > 0) updatedPageNumbers.push(line); // Add to updatedPageNumbers
}

// * Step 1: Represent the rules clearly
const rules = [];

for (let rule of pageOrdering) {
  const [before, after] = rule.split("|"); // * Split the rule at the pipe "|"
  rules.push({ before, after }); // * Store as an object
}

// * Step 2: Arrow function to validate a single update
const isValidUpdate = (update, rules) => {
  const pages = update.split(","); // * Split the update into an array of pages

  for (let rule of rules) {
    const indexBefore = pages.indexOf(rule.before); // * Find index of 'before'
    const indexAfter = pages.indexOf(rule.after); // * Find index of 'after'

    // * If both X and Y exist, check if 'before' comes before 'after'
    if (indexBefore !== -1 && indexAfter !== -1 && indexBefore > indexAfter) {
      return false; // * Rule violated → update is invalid
    }
  }
  return true; // * All rules passed → update is valid
};

// * Step 3: Validate all updates
console.log("Validation Results:");

let validCount = 0;
let invalidCount = 0;

for (let update of updatedPageNumbers) {
  const isValid = isValidUpdate(update, rules);

  if (isValid) {
    validCount++;
    console.log(`update: ${update} -> Valid`);
  } else {
    invalidCount++;
    console.log(`Update: ${update} -> Invalid`);
  }
}

console.log(`/nSummary:`);
console.log(`Valid Updates: ${validCount}`);
console.log(`Invalid Updates: ${invalidCount}`);

const validUpdates = [];
let middleSum = 0;

for (let update of updatedPageNumbers) {
  const isValid = isValidUpdate(update, rules); // Recheck validity
  if (isValid) validUpdates.push(update); // Add valid update to the list
}

validUpdates.forEach((update) => {
  const pages = update.split(",").map(Number); // Convert to numbers
  const middleNumber = pages[Math.floor(pages.length / 2)]; // Find middle
  console.log(middleNumber);
  middleSum += middleNumber; // Add the total sum
});

console.log(`\nSum of Middle Numbers: ${middleSum}`);

updateSolution(middleSum);
