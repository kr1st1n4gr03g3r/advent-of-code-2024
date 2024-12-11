const fs = require("fs");
const path = require("path");

/**
 * Updates the solution.md file for the current solution.js file.
 * Replaces content inside the <details> block in ## Conclusion with the result.
 * @param {string} result - The result to update in the solution.md file.
 */
function updateSolution(result) {
  const folderPath = path.dirname(require.main.filename); // Folder of the running script
  const markdownPath = path.join(folderPath, "solution.md");

  // Read the existing markdown content
  const content = fs.existsSync(markdownPath)
    ? fs.readFileSync(markdownPath, "utf8")
    : "";

  // Define regex to find and replace content inside the <details> block under ## Conclusion
  const sectionRegex =
    /(## Conclusion\s*\n<details>\s*<summary>Click to reveal<\/summary>\s*\n\n)([\s\S]*?)(\n\n<\/details>)/m;

  if (!content.match(sectionRegex)) {
    console.error(
      `The section between ## Conclusion and ## Summary, including the <details> block, is missing in ${markdownPath}.`
    );
    return;
  }

  // Replace the content within the <details> block
  const updatedContent = content.replace(sectionRegex, `$1${result}$3`);

  // Write back to solution.md
  fs.writeFileSync(markdownPath, updatedContent.trim(), "utf8");
  console.log(`Updated ${markdownPath} with result: ${result}`);
}

module.exports = { updateSolution };
