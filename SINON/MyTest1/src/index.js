function func(arg1, arg2) {
    console.log(`${arg1} ${arg2}`);
    if (arg1 === "fail" || arg2 === "fail"){
        throw new Error("failing now...")
    }
    return "done"; 
}

func("hi", "bye");

module.exports = {
    func
}