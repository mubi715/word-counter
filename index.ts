import { log } from "console";
import { promptForParagraph } from "./inquirerPrompt.js";

const myPara: string = await promptForParagraph();

let another: string[] = myPara.split(/\s*/);

console.log(`your paragraph contains ${another.length} words`);
