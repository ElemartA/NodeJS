import fs from "fs";

const path1 = process.argv.slice(1)[1];
const path2 = process.argv.slice(1)[2];

export const copy = async () => {
  fs.copyFile(path1, `${path2}/${path1}`, (err) => {
    if (err) {
      process.send("Error Found:", err);
    } else {
      process.send("Done, file was copied");
    }
  });
};

copy();
