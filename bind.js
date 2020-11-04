let dog = {
    sound: 'woof',
    talk: function() {
    console.log(this.sound);
    }
}
  
let talkFunction = dog.talk;
//talkFunction;
talkFunction.bind(dog)();