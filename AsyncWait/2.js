async function test() {
    return new Promise((resolve, reject) => {
        let a = 1 + 1;
        if (a === 3) {
            resolve("Success");
        }
        else {
            reject("Failed");
        }
    });
}

test().then((message) => {
    console.log("This is the resolve message: " + message);
}).catch((message) => {
    console.log("This is the reject message:  " + message);
}).catch((error) => {
    throw new Error(error);
    process.exitCode = 1;
});
