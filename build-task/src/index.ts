import tl = require("azure-pipelines-task-lib/task");
import lib = require("lib");

async function run() {
  tl.debug("Starting task execution script");

  console.log("Hello from index.ts");
  console.info(lib);

  tl.debug(`is valid cpu 1 ${lib.isValidCPU("1")}`);
  tl.debug(`is valid cpu 1. ${lib.isValidCPU("1.")}`);

  try {
    const inputString: string | undefined = tl.getInput("samplestring", true);
    if (inputString == "bad") {
      tl.setResult(tl.TaskResult.Failed, "Bad input was given");
      return;
    }
    console.log("Hello", inputString);
  } catch (err: any) {
    tl.setResult(tl.TaskResult.Failed, err.message);
  }
}

run();
