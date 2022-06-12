import child_process from "child_process";

export function runScript(scriptPath, args) {
  // keep track of whether callback has been invoked to prevent multiple invocations
  var invoked = false;

  var process = child_process.fork(scriptPath, args);

  // listen for errors as they may prevent the exit event from firing
  process.on("error", function (err) {
    if (invoked) return;
    invoked = true;
    console.log(err);
  });

  process.on("message", (msg) => {
    if (invoked) return;
    invoked = true;
    console.log(msg);
  });
}
