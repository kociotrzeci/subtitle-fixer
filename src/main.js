import fixChars from "./fixChars.js";
import getFiles from "./getFiles.js";

const files = await getFiles(
  "Z:/torrent/seriale/Breaking.Bad.Complete.S01-S05.1080p.10bit.BluRay.x265.HEVC.6CH-MRN"
);
console.log(files);

for (const file of files) {
  await fixChars(file);
}
