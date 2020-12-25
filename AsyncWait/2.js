const random = () => {
    if (1 === 2){
        return Promise.resolve(Math.random());
    }
}
const useRandom = async() => {
    try {
        const first = await random();
        const second = await random();
        const third = await random();
        console.log(`first: ${first} second: ${second} third: ${third}`);
    } catch (err) {
        console.error("Error");
    }
}

async function test(){
    return new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a === 2){
        resolve("Success");
    }
    else{
        reject("Failed");
    }
});
}

// test().then((message) => {
//     console.log("This is the resolve message: " + message);
// }).catch((message) => {
//     console.log("This is the reject message:  " + message);
// }).catch((error) => {
//     throw new Error(error);
//     process.exitCode = 1;
// });

async function useTest(){
    console.log("Hi");
    try{
        console.log("This is the resolve message: " + await test());
    } catch (error){
        console.log("This is the reject message:  " + await test());
    }
}

useRandom();
//useTest();

