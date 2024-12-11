const fs = require("fs");
const path = require("path");

/**
 * Updates the solution.md file for the current solution.js file.
 * Clears content between ## Conclusion and ## Summary, then updates it with the new result.
 * @param {string} result - The result to update in the solution.md file.
 */
function updateSolution(result) {
  const folderPath = path.dirname(require.main.filename); // Folder of the running script
  const markdownPath = path.join(folderPath, "solution.md");

  // Read the existing markdown content
  const content = fs.existsSync(markdownPath)
    ? fs.readFileSync(markdownPath, "utf8")
    : "";

  // Define regex to find and clear content between ## Conclusion and ## Summary
  const sectionRegex = /(## Conclusion\s*\n)([\s\S]*?)(\n## Summary)/m;

  if (!content.match(sectionRegex)) {
    console.error(
      `The section between ## Conclusion and ## Summary is missing in ${markdownPath}.`
    );
    return;
  }

  // Replace the content between ## Conclusion and ## Summary
  const updatedContent = content.replace(
    sectionRegex,
    `$1\`\`\`\n${result}\n\`\`\`$3`
  );

  // Write back to solution.md
  fs.writeFileSync(markdownPath, updatedContent.trim(), "utf8");
  console.log(`Updated ${markdownPath} with result: ${result}`);
}

module.exports = { updateSolution };
