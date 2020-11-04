var printTwo =function () {
console.log(2);
};
printTwo(); // 2
printTwo.call(); // 2
printTwo.apply(); // 2

let john = {
    name: 'john',
    agen: 32,
    occupation: 'teacher',
    func: function() {
        console.log ('Hello ' + this.name)
    }
}

john.func();

let emily = {
    name: 'emily',
    agen: 69,
    occupation: 'secretary',

}
// method borrowing
john.func.call(emily);