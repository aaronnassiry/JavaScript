const { expect } = require("chai");
const sinon = require("sinon");
const fs = require("fs");
const proxyquire = require("proxyquire");
const fileManagement = require("./file.management");
const writeSpy = sinon.spy(fs, "writeFileSync");



describe("File Management", () => {
  beforeEach(() => {});

  afterEach(() => {
    sinon.restore();
  });

  describe("When creating a file", () => {
    it.only("Should create a new file", () => {

      fileManagement.createFile("test.txt");
      expect(writeSpy.calledWith("./data/test.txt", "")).to.be.true;
      try {
        fs.unlinkSync("./data/test.txt")
      } catch(err) {
        console.error(err)
      }
    });

    it("Should create a new file", () => {

      fileManagement.createFileInjected("test.txt", fs);
      expect(writeSpy.calledWith("./data/test.txt", "")).to.be.true;
    });

    it("Should not create a new file if no name is specified", () => {

      try {
        fileManagement.createFile();
      } catch (err) {}
      expect(writeSpy.notCalled).to.be.true;
    });
  });
});
