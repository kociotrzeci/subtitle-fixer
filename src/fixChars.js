import replaceChart from "../replaceChart.js";
import fs from "fs";
import chardet from "chardet";
function replaceMultiple(str, replaceChart) {
  let result = str;
  for (const [search, replacement] of Object.entries(replaceChart)) {
    result = result.replaceAll(search, replacement);
  }
  return result;
}

function fixChars(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      return;
    }
    const newStr = replaceMultiple(data, replaceChart);
    fs.writeFile(filePath, newStr, (err) => {
      if (err) {
        console.error(`Error writing file ${err}`);
        return;
      }
      return;
    });
    fs.writeFile(filePath + ".backup", data, (err) => {
      if (err) {
        console.error(`Error writing file ${err}`);
        return;
      }
      return;
    });
  });
}

export default fixChars;
