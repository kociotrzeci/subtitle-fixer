import fixChars from "../src/fixChars";
import getFiles from "../src/getFiles";
import fixFilesInDirectory from "../src/fixFilesInDirectory";
import fs from "fs/promises";
beforeEach(async () => {
  try {
    await fs.cp("./tests/testData/input", "./tests/testData/workDir", {
      recursive: true,
    });
    console.log("Copy completed successfully");
  } catch (err) {
    console.error("Error during copy:", err);
    throw err;
  }
  console.log(await getFiles("./"));
});

test("fix one file", async () => {
  await fixChars("./tests/testData/workDir/text1.txt");
  const dataOutputCorrect = await fs.readFile(
    "./tests/testData/output/text1.txt",
    "utf8"
  );
  const dataOutput = await fs.readFile(
    "./tests/testData/workDir/text1.txt",
    "utf8"
  );
  expect(dataOutput).toEqual(dataOutputCorrect);
});

test("backup creation", async () => {
  await fixChars("./tests/testData/workDir/text1.txt");
  const dataOutputCorrect = await fs.readFile(
    "./tests/testData/output/text1.txt.backup",
    "utf8"
  );
  const dataOutput = await fs.readFile(
    "./tests/testData/WorkDir/text1.txt.backup",
    "utf8"
  );
  expect(dataOutput).toEqual(dataOutputCorrect);
});

test("scandir", async () => {
  const correct = [
    "./tests/testData/input/recursive/text1.txt",
    "./tests/testData/input/recursive/text2.txt",
    "./tests/testData/input/text1.txt",
    "./tests/testData/input/text2.txt",
    "./tests/testData/input/text3.srt",
  ];
  //console.log(await getFiles("./"));
  expect(await getFiles("./tests/testData/input")).toEqual(correct);
});
test("fix files in directory (recursive)", async () => {
  await fixFilesInDirectory("./tests/testData/workDir");
  const correctFile = await fs.readFile(
    "./tests/testData/output/text1.txt",
    "utf8"
  );
  const fixedFile = await fs.readFile(
    "./tests/testData/WorkDir/recursive/text1.txt",
    "utf8"
  );
  expect(fixedFile).toEqual(correctFile);
});
test("not overwriting backup", async () => {
  await fixChars("./tests/testData/workDir/text1.txt");
  await fixChars("./tests/testData/workDir/text1.txt");
  await fixChars("./tests/testData/workDir/text1.txt");
  const dataOutputCorrect = await fs.readFile(
    "./tests/testData/output/text1.txt.backup",
    "utf8"
  );
  const dataOutput = await fs.readFile(
    "./tests/testData/workDir/text1.txt.backup",
    "utf8"
  );
  expect(dataOutput).toEqual(dataOutputCorrect);
});
