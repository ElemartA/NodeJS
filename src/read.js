import fs from "fs";

const path1 = process.argv.slice(2)[0];

export const read = async () => {
  const stream = fs.createReadStream(path1, "utf-8");

  let data = "";

  stream.on("data", (chunk) => (data += chunk));
  stream.on("end", () => console.log(data));
  stream.on("error", (error) => console.log("Error", error.message));
};

read();
