import fixChars from "./main";
import fs from "fs";

beforeEach((done) => {
  fs.cp(
    "./testData/input",
    "./testData/workDir",
    { recursive: true },
    (err) => {
      if (err) {
        console.error("Error during copy:", err);
        done(err);
      } else {
        console.log("Copy completed successfully");
        done();
      }
    }
  );
});

test("fixing one file", async () => {
  await fixChars(
    "./testData/workDir/Breaking.Bad.S02E02.Grilled.1080p.10bit.BluRay.x265.HEVC.6CH-MRN.txt"
  );
  const dataOutputCorrect = fs.readFileSync(
    "./testData/output/Breaking.Bad.S02E02.Grilled.1080p.10bit.BluRay.x265.HEVC.6CH-MRN.txt",
    "utf8"
  );
  const dataOutput = fs.readFileSync(
    "./testData/workDir/Breaking.Bad.S02E02.Grilled.1080p.10bit.BluRay.x265.HEVC.6CH-MRN.txt",
    "utf8"
  );

  expect(dataOutput).toEqual(dataOutputCorrect);
});
/*
test("checking backup creation", () => {
  const dd = fixChars(
    "./testData/workDir/Breaking.Bad.S02E02.Grilled.1080p.10bit.BluRay.x265.HEVC.6CH-MRN.txt"
  );

  const dataOutputCorrect = fs.readFileSync(
    "./testData/output/Breaking.Bad.S02E02.Grilled.1080p.10bit.BluRay.x265.HEVC.6CH-MRN.txt.backup",
    "utf8",
    (err, data) => {
      if (err) {
        console.error(`Error reading file: ${err}`);
        return;
      } else return data;
    }
  );
  const dataOutput = fs.readFileSync(
    "./testData/WorkDir/Breaking.Bad.S02E02.Grilled.1080p.10bit.BluRay.x265.HEVC.6CH-MRN.txt.backup",
    "utf8",
    (err, data) => {
      if (err) {
        console.error(`Error reading file: ${err}`);
        return;
      } else return data;
    }
  );
  expect(dataOutput).toEqual(dataOutputCorrect); // Example assertion
});
*/
