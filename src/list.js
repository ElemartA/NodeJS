import fs from "fs";

const path1 = process.cwd();

export const list = async () => {
  fs.readdir(path1, (err, arrayFiles) => {
    if (err) console.log("FS operation failed: directory was not found");

    arrayFiles.map((file) => {
      process.send(file.toString());
    });
  });
};

list();
