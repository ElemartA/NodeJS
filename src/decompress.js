import fs from "fs";
import { createBrotliDecompress } from "zlib";
import { pipeline } from "stream";

const path1 = process.argv.slice(1)[1];
const path2 = process.argv.slice(1)[2];
console.log(path1);
console.log(path1);

export const decompress = async () => {
  const input = fs.createReadStream(path1, "utf8");
  const output = fs.createWriteStream(`${path2}/decompessed`);
  const unzip = createBrotliDecompress();

  pipeline(input, unzip, output, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

decompress()
  .then(() => process.send("Done"))
  .catch(() => process.send("Operation failed"));
