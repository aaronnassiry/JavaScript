(function (goodluck) {
    let score = Math.round(Math.random() * 10);
    console.log(score);
    console.log(score >= 5 - goodluck);
  })(5);
  
(function() {
    var x = 20;
    var y = 20;
    var answer = x + y;
    console.log(answer);
})();

let result = (function() {
    var x = 20;
    var y = 20;
    var answer = x + y;
    return answer;
})();
console.log(result);
console.log(result);