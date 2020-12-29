async function test() {
    return new Promise((resolve, reject) => {
        let a = 1 + 1;
        if (a === 2) {
            console.log("Success");
            resolve("Success");
        }
        else {
            reject("Failed");
        }
    });
}

async function validate() {
    try {
        await test();
    } catch (error) {
        console.error(error);
    }
}

validate();

// async function test() {
//     return new Promise((resolve, reject) => {
//         let a = 1 + 1;
//         if (a === 3) {
//             resolve("Success");
//         }
//         else {
//             reject("Failed");
//         }
//     });
// }

// test().then((message) => {
//     console.log("This is the resolve message: " + message);
// }).catch((message) => {
//     console.log("This is the reject message:  " + message);
// }).catch((error) => {
//     throw new Error(error);
//     process.exitCode = 1;
// });
