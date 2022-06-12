import os from "os";
const { EOL } = os;

const command = process.argv.slice(2)[0];

export const osFunction = async () => {
  switch (command) {
    case "EOL":
      process.send(
        "Paragraphs always contains EOL" + os.EOL + "EOL stands for end of line"
      );
      break;
    case "cpus":
      process.send(os.cpus());
      break;
    case "homedir":
      process.send(os.userInfo().homedir);
      break;
    case "username":
      process.send(os.userInfo().username);
      break;
    case "architecture":
      process.send("CPU architecture: " + os.arch());
      break;

    default:
      break;
  }
};

osFunction();
