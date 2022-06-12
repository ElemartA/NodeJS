import fs from "fs";
import { createBrotliDecompress } from "zlib";
import { pipeline } from "stream";

const path1 = process.argv.slice(1)[1];
const path2 = process.argv.slice(1)[2];
const path3 = path1.replace(".gz", "");

export const decompress = async () => {
  const input = fs.createReadStream(path1);
  const output = fs.createWriteStream(`${path2}/${path3}`);
  const unzip = createBrotliDecompress();

  pipeline(input, unzip, output, (err) => {
    if (err) {
      console.log(err);
    }
  });
  output.end();
};

decompress();
