async function test(param1) {
    return new Promise((resolve, reject) => {
        console.log("inside promise");
        let a = param1 % 2;
        if (a === 0) {
             console.log("Even " + param1);
             resolve("Even" + param1);
        }
        else {
             //reject(process.exit(1));
             throw new Error("rejected");
        }
    });
}

async function validate(param1){
    await test(param1);
}

//validate(8);

module.exports = {
    validate
}