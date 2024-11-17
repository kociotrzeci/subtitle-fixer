const { fixChars } = require("./main");
const fs = require("fs");

beforeAll((done) => {
  fs.cp(
    "./testData/input",
    "./testData/workDir",
    { recursive: true },
    (err) => {
      if (err) {
        console.error("Error during copy:", err);
        done(err); // Pass the error to done() if there's an error
      } else {
        console.log("Copy completed successfully");
        done(); // Call done() when finished
      }
    }
  );
});

test("properly fixing one file", () => {
  expect(1).toBe(1); // Example assertion
});
