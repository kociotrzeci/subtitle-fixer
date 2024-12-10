import fixChars from "./fixChars.js";
import getFiles from "./getFiles.js";

async function fixFilesInDirectory(dir = "./") {
  const files = await getFiles(dir);
  console.log(files);

  for (const file of files) {
    await fixChars(file);
  }
}
export default fixFilesInDirectory;
