import * as assert from "assert";
import { isValidCPU, isValidMemory } from "../src";

describe("Commons tests", function () {
  it("should validate memory", function () {
    const listOfValidMemory = [
      "1Ki",
      "1Mi",
      "1Gi",
      "1Ti",
      "1Ei",
      "1K",
      "1M",
      "1G",
      "1T",
      "1E",
    ];
    const listOfInvalidMemory = [
      "1",
      "1Kb",
      "1Mb",
      "1Gb",
      "1Tb",
      "1Eb",
      "1KB",
      "1MB",
      "1GB",
      "1TB",
      "1EB",
      "1Kib",
      "1Mib",
      "1Gib",
      "1Tib",
      "1Eib",
      "1KB",
      "1MB",
      "1GB",
      "1TB",
      "1EB",
      "1KiB",
      "1MiB",
      "1GiB",
      "1TiB",
      "1EiB",
      "1KB",
      "1MB",
      "1GB",
      "1TB",
      "1EB",
    ];
    listOfValidMemory.forEach((memory) => {
      assert.equal(isValidMemory(memory), true, `should validate ${memory}`);
    });
    listOfInvalidMemory.forEach((memory) => {
      assert.equal(
        isValidMemory(memory),
        false,
        `should not validate ${memory}`
      );
    });
  });

  it("should validate CPU", function () {
    const listOfValidCPU = ["1m", "1"];
    const listOfInvalidCPU = ["1mi", "1mib", "1mB", "1Mi", "1M", "1MiB"];
    listOfValidCPU.forEach((cpu) => {
      assert.equal(isValidCPU(cpu), true, `should validate ${cpu}`);
    });
    listOfInvalidCPU.forEach((cpu) => {
      assert.equal(isValidCPU(cpu), false, `should not validate ${cpu}`);
    });

    assert.equal(isValidCPU("0.1"), true, "should validate 0.1");
    assert.equal(isValidCPU("-.1"), false, "should not validate -.1");
    assert.equal(isValidCPU("1.1"), true, "should validate 1.1");
    assert.equal(isValidCPU("1."), true, "should validate 1.");
  });
});
