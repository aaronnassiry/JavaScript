const sinon = require("sinon");
const cli = require("@store-sfdcbt-net/CICD_gulp-cli-util");
const glob = require("glob");

describe("test", () => {
it("test", () => {
        const cliMock = sinon.mock(cli);
        cliMock
		.expects("executeSync")
 		.once()
 		.withExactArgs("ls")
		.returns();
        require("../index.js").ls;
	cliMock.verify();
});
});

