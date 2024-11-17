import replaceChart from "./replaceChart.js";
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
    console.log(data);
    const newStr = replaceMultiple(data, replaceChart);
    console.log(newStr);
    fs.writeFile(
      "./testData/output/Breaking.Bad.S02E02.Grilled.1080p.10bit.BluRay.x265.HEVC.6CH-MRN.txt",
      newStr,
      (err) => {
        if (err) {
          console.error(`Error writing file ${err}`);
          return;
        }
        return;
      }
    );
    fs.writeFile(
      `./testData/output/Breaking.Bad.S02E02.Grilled.1080p.10bit.BluRay.x265.HEVC.6CH-MRN.txt${".backup"}`,
      data,
      (err) => {
        if (err) {
          console.error(`Error writing file ${err}`);
          return;
        }
        return;
      }
    );
  });
}

fixChars(
  "./testData/input/Breaking.Bad.S02E02.Grilled.1080p.10bit.BluRay.x265.HEVC.6CH-MRN.txt"
);
module.exports = fixChars;
