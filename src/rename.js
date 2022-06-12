import fs from "fs";

const path1 = process.argv.slice(1)[1];
const path2 = process.argv.slice(1)[2];

export const rename = async () => {
  fs.rename(path1, path2, (err) => {
    if (err) console.log("FS operation failed: Rename wasn't complete!");
    console.log("Rename complete!");
  });
};

rename();
