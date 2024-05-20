import * as path from "path";
import * as assert from "assert";
import * as ttm from "azure-pipelines-task-lib/mock-test";
import process = require("process");

describe("Sample task tests", function () {
  before(function () {
    process.env["TASK_TEST_TRACE"] = "1";
    process.env["SYSTEM_DEBUG"] = "true";
  });

  after(() => {});

  it("should succeed with simple inputs", async function () {
    let tp: string = path.join(__dirname, "success.js");
    let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);
    await tr.runAsync();
    console.log(tr.succeeded);
    assert.equal(tr.succeeded, true, "should have succeeded");
    assert.equal(tr.warningIssues.length, 0, "should have no warnings");
    assert.equal(tr.errorIssues.length, 0, "should have no errors");
    console.log(tr.stdout);
    assert.equal(
      tr.stdout.indexOf("Hello human") >= 0,
      true,
      "should display Hello human"
    );
  });

  it("it should fail if tool returns 1", async function () {
    this.timeout(1000);

    let tp = path.join(__dirname, "failure.js");
    let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);
    await tr.runAsync();
    console.log(tr.succeeded);
    assert.equal(tr.succeeded, false, "should have failed");
    assert.equal(tr.warningIssues.length, 0, "should have no warnings");
    assert.equal(tr.errorIssues.length, 1, "should have 1 error issue");
    assert.equal(
      tr.errorIssues[0],
      "Bad input was given",
      "error issue output"
    );
    assert.equal(
      tr.stdout.indexOf("Hello bad"),
      -1,
      "Should not display Hello bad"
    );
  });
});
