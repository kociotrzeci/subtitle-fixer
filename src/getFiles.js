import fs from "fs/promises";
import path from "path";

async function scanDir(dir = "./") {
  let files = await fs.readdir(dir, { withFileTypes: true });
  let fileList = [];
  for (const element of files) {
    if (element.name.endsWith(".txt") || element.name.endsWith(".srt")) {
      fileList.push(dir + "/" + element.name);
    }
    if (element.isDirectory()) {
      fileList = fileList.concat(await scanDir(dir + "/" + element.name));
    }
  }
  return fileList;
}

let result = scanDir("./tests/testData/input");
result;

export default scanDir;
