import tl = require("azure-pipelines-task-lib/task");
import lib = require("lib");

class helmcommand extends lib.basecommand {
  login(): void {
    throw new Error("Method not implemented.");
  }
  logout(): void {
    throw new Error("Method not implemented.");
  }
  getTool(): string {
    return "helm";
  }
}

async function helmVersion() {
  const helm = new helmcommand(true);
  const command = helm.createCommand();
  command.arg("version");
  const result = await helm.execCommand(command);
  if (result != 0) {
    throw new Error("helm version failed");
  }
}

async function run() {
  tl.debug("Starting task execution script");
  await helmVersion();

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
