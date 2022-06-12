import fs from "fs";
import zlib from "zlib";

const path1 = process.argv.slice(1)[1];
const path2 = process.argv.slice(1)[2];
const path3 = path1.split(".")[0];
console.log(path3);

export const compress = async () => {
  const input = fs.createReadStream(path1, "utf-8");
  const output = fs.createWriteStream(`${path2}/${path1}.gz`);

  const gzip = zlib.createBrotliCompress();

  input.pipe(gzip).pipe(output);
  output.on("finish", () => {
    process.send("Done, file was compressed");
  });
  output.end();
};

compress();
