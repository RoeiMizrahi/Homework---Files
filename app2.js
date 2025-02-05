//Roei Mizrahi

const fs = require("fs");
const inputFiles = [
  "text1.txt",
  "text2.txt",
  "text3.txt",
  "text4.txt",
  "text5.txt",
  "text6.txt",
  "text7.txt",
  "text8.txt",
  "text9.txt",
  "text10.txt",
];
const outputFile = "output3.txt";
async function mergeFiles() {
  const writer = fs.createWriteStream(outputFile);
  for (let i = 0; i < inputFiles.length; i++) {
    const fileName = inputFiles[i];
    const linesToRead = i + 1;
    const fileContent = fs.readFileSync(fileName, "utf8");
    const lines = fileContent.split("\n");
    if (lines.length >= linesToRead) {
      for (let j = 0; j < linesToRead; j++) writer.write(lines[j] + "\n");
    }
  }
}
mergeFiles();
