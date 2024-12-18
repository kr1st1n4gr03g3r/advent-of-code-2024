const fs = require("fs");
const { updateSolution } = require("../../utils/update-solution");

// Read input file and split into lines
const input = fs.readFileSync("input.txt", "utf8").toString().split("\n");

// Separate rules and updates
const pageOrdering = [];
const updatedPageNumbers = [];

input.forEach((line) => {
  line = line.trim();
  if (line.includes("|")) pageOrdering.push(line);
  else if (line.length > 0) updatedPageNumbers.push(line);
});

// Convert rules into objects
const rules = pageOrdering.map((rule) => {
  const [before, after] = rule.split("|");
  return { before, after };
});

// Function to validate an update
const isValidUpdate = (update, rules) => {
  const pages = update.split(",");

  for (let rule of rules) {
    const indexBefore = pages.indexOf(rule.before);
    const indexAfter = pages.indexOf(rule.after);

    if (indexBefore !== -1 && indexAfter !== -1 && indexBefore > indexAfter) {
      return false; // Rule is violated
    }
  }
  return true; // Update is valid
};

// Function to reorder pages using topological sorting
const reorderPages = (pages, rules) => {
  const graph = new Map();
  const inDegree = new Map();

  // Initialize graph and inDegree for pages in the update
  pages.forEach((page) => {
    graph.set(page, []);
    inDegree.set(page, 0);
  });

  // Build graph using rules
  for (let { before, after } of rules) {
    if (pages.includes(before) && pages.includes(after)) {
      graph.get(before).push(after);
      inDegree.set(after, inDegree.get(after) + 1);
    }
  }

  // Topological sort to order the pages
  const queue = [];
  const sortedPages = [];

  for (let [page, count] of inDegree) {
    if (count === 0) queue.push(page);
  }

  while (queue.length > 0) {
    const current = queue.shift();
    sortedPages.push(current);

    for (let neighbor of graph.get(current)) {
      inDegree.set(neighbor, inDegree.get(neighbor) - 1);
      if (inDegree.get(neighbor) === 0) queue.push(neighbor);
    }
  }

  return sortedPages;
};

// Identify and fix invalid updates
let correctedMiddleSum = 0;

updatedPageNumbers.forEach((update) => {
  const pages = update.split(",");

  if (!isValidUpdate(update, rules)) {
    // Reorder the pages if the update is invalid
    const reorderedPages = reorderPages(pages, rules);
    const middleNumber = reorderedPages[Math.floor(reorderedPages.length / 2)];
    correctedMiddleSum += Number(middleNumber);
  }
});

// Output the result
console.log(`Sum of Middle Page Numbers (Corrected): ${correctedMiddleSum}`);

updateSolution();
