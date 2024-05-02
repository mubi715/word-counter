import inquirer from "inquirer";

export async function promptForParagraph() {
  const myFile = await inquirer.prompt({
    type: "input",
    message: "Enter your paragraph:",
    name: "paragraph",
    validate: function (value) {
      // Validation to ensure the input is not empty
      if (value.trim() !== "") {
        return true;
      }
      return "Please enter a paragraph.";
    },
  });

  return myFile.paragraph as string;
}
