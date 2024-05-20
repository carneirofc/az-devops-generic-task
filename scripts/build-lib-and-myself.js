// create a javascript file that cds into the dir received from the first argument and runs the build-lib-and-myself.js script
const fs = require("fs");
const path = require("path");

const dir = process.argv[2];
const commands = process.argv.slice(3);

script = ["cd " + dir, "npm " + commands.join(" ")].join(" && ");
// call the script using subprocess or command
const exec = require("child_process").execSync;
console.info("Running script: " + script + " at " + path.resolve(dir));
exec(script, { stdio: "inherit" });
