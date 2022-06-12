import readline from "readline";
import { runScript } from "./src/script.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const home = process.env.HOME;
const work = process.cwd();
const currentPath = "You are currently in";
const usernameArg = process.argv.slice(2)[0];
const name = usernameArg.split("=")[1];

process.chdir(home);

const salute = (user) => {
  console.log(`Welcome to the File Manager, ${user}!`);
};
if (usernameArg.startsWith("--username=")) {
  salute(name);
  console.log(currentPath, process.cwd());
} else {
  rl.question("Hi, what is your name?\n", (name) => {
    salute(name);
    console.log(currentPath, process.cwd());
  });
}

process.on("exit", () => {
  console.log(`Thank you for using File Manager, ${name}!`);
});

rl.on("line", (res) => {
  const instruction = res.split(" ")[0];
  const arg1 = res.split(" ")[1];
  const arg2 = res.split(" ")[2];
  const err = "Operation failed!";
  switch (instruction) {
    case "up":
      if (process.cwd() === home) {
        console.log(err);
      } else {
        process.chdir("../");
        console.log(currentPath, process.cwd());
      }
      break;
    case "cd":
      try {
        process.chdir(arg1);
        console.log(currentPath, process.cwd());
      } catch {
        console.log(err);
      }
      break;
    case "hash":
      runScript(work + "/src/hash.js", [arg1]);
      break;
    case "ls":
      runScript(work + "/src/list.js", [work]);
      break;
    case "cat":
      runScript(work + "/src/read.js", [arg1]);
      break;
    case "add":
      runScript(work + "/src/create.js", [arg1]);
      break;
    case "rn":
      runScript(work + "/src/rename.js", [arg1, arg2]);
      break;
    case "cp":
      runScript(work + "/src/copy.js", [arg1, arg2]);
      break;
    case "os":
      runScript(work + "/src/os.js", [arg1.replace("--", "")]);
      break;
    case "compress":
      runScript(work + "/src/compress.js", [arg1, arg2]);
      break;
    case "decompress":
      runScript(work + "/src/decompress.js", [arg1, arg2]);
      break;

    default:
      break;
  }
});
