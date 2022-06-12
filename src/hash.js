import fs from "fs";
import crypto from "crypto";

const path1 = process.argv.slice(2)[0];

export const calculateHash = async () => {
  fs.readFile(path1, "utf-8", (err, data) => {
    if (err) {
      process.send("Operation failed");
    } else {
      const hash = crypto.createHash("sha256").update(data).digest("hex");
      process.send(hash);
    }
  });
};

calculateHash();
