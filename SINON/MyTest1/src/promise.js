async function test(param1) {
    return new Promise((resolve, reject) => {
        let a = param1 % 2;
        if (a === 0) {
             console.log("Even " + param1);
             resolve("Even" + param1);
        }
        else {
            reject("Odd " + param1);
            throw new Error();
        }
    });
}

async function validate(param1){
    try {
       await test(param1);
    } catch (error){
        console.error(error);
        throw new Error("rejected");
    }
}

validate(param1=7);

module.exports = {
    test,
    validate
}