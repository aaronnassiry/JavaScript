const sinon = require("sinon");
const cli = require("@store-sfdcbt-net/CICD_gulp-cli-util");
function ls(){
	cli.executeSync("ls");
}
ls()
