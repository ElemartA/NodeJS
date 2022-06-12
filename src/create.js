import fs from "fs";

const path2 = process.argv.slice(2)[0];

export const create = async () => {
  const output = fs.createWriteStream(path2);
  output.write("", "utf-8");
  output.on("finish", () => {
    process.send("Done, file was created");
  });
  output.end();
};

create();
